import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { apply, DARK_ATTRIBUTE, THEME_ATTRIBUTE } from '../src/apply.mjs'
import { DSH_ICON_REPLACEMENTS, LUCIDE_ICON_MARKUP } from '../src/icon-registry.mjs'
import { hashPath, replaceSvg, restoreSvg } from '../src/icons.mjs'

const CHECKLIST_PATH = 'M13.3277 9.69629V10.976H7.28086V9.69629H13.3277Z'

class FakeElement {
  nodeType = 1
  dataset = {}
  isConnected = true
  #attributes = new Map()

  hasAttribute(name) {
    return this.#attributes.has(name)
  }

  getAttribute(name) {
    return this.#attributes.get(name) ?? null
  }

  setAttribute(name, value = '') {
    this.#attributes.set(name, String(value))
  }

  removeAttribute(name) {
    this.#attributes.delete(name)
  }
}

class FakeSvg extends FakeElement {
  constructor(path = CHECKLIST_PATH) {
    super()
    this.path = path
    this.innerHTML = `<path d="${path}"></path>`
    this.setAttribute('viewBox', '0 0 14 14')
    this.setAttribute('fill', 'currentColor')
  }

  matches(selector) {
    return selector === 'svg'
  }

  closest(selector) {
    return selector === 'svg' ? this : undefined
  }

  querySelector(selector) {
    if (selector === 'path[d]') {
      return { getAttribute: (name) => name === 'd' ? this.path : null }
    }
    if (selector === ':scope > g[data-dsh-lucide-layer]') return this.layer ?? null
    return null
  }

  querySelectorAll() {
    return []
  }

  insertAdjacentHTML(_position, html) {
    const match = html.match(/^<g data-dsh-lucide-layer="([^"]+)">([\s\S]*)<\/g>$/)
    assert.ok(match)
    const svg = this
    this.layer = {
      dataset: { dshLucideLayer: match[1] },
      innerHTML: match[2],
      remove() {
        svg.layer = undefined
      },
    }
  }
}

class FakeBody extends FakeElement {
  constructor(svgs = []) {
    super()
    this.svgs = svgs
  }

  matches() {
    return false
  }

  querySelectorAll(selector) {
    return selector === 'svg' ? this.svgs : []
  }
}

class FakeObserver {
  static instances = []

  constructor(callback) {
    this.callback = callback
    FakeObserver.instances.push(this)
  }

  observe() {}

  emit(mutations) {
    this.callback(mutations)
  }

  disconnect() {
    this.disconnected = true
  }
}

class BrowserNormalizedSvg extends FakeSvg {
  layerWrites = 0

  insertAdjacentHTML(_position, html) {
    const match = html.match(/^<g data-dsh-lucide-layer="([^"]+)">([\s\S]*)<\/g>$/)
    assert.ok(match)
    const svg = this
    const normalize = value => value.replace(/<([a-z][\w-]*)([^>]*) \/>/g, '<$1$2></$1>')
    let innerHTML = normalize(match[2])
    this.layerWrites += 1
    this.layer = {
      dataset: { dshLucideLayer: match[1] },
      get innerHTML() {
        return innerHTML
      },
      set innerHTML(value) {
        svg.layerWrites += 1
        innerHTML = normalize(value)
      },
      remove() {
        svg.layer = undefined
      },
    }
  }
}

function mount(body) {
  let dispose
  globalThis.document = { body }
  globalThis.MutationObserver = FakeObserver
  apply({
    effect(factory) {
      dispose = factory()
    },
  })
  return () => dispose()
}

test.afterEach(() => {
  delete globalThis.document
  delete globalThis.MutationObserver
  FakeObserver.instances.length = 0
})

test('apply enables the theme and replaces a DSH icon with Lucide', () => {
  const svg = new FakeSvg()
  const body = new FakeBody([svg])
  mount(body)

  assert.equal(body.hasAttribute(THEME_ATTRIBUTE), true)
  assert.equal(body.hasAttribute(DARK_ATTRIBUTE), true)
  assert.equal(svg.dataset.dshLucideIcon, 'list-checks')
  assert.equal(svg.getAttribute('viewBox'), '0 0 24 24')
  assert.equal(svg.getAttribute('stroke'), 'currentColor')
  assert.equal(svg.layer.innerHTML, LUCIDE_ICON_MARKUP['list-checks'])
  assert.match(svg.innerHTML, /M13\.3277/)
})

test('dispose restores the original SVG and previous light theme', () => {
  const svg = new FakeSvg()
  const original = svg.innerHTML
  const body = new FakeBody([svg])
  const dispose = mount(body)
  dispose()

  assert.equal(body.hasAttribute(THEME_ATTRIBUTE), false)
  assert.equal(body.hasAttribute(DARK_ATTRIBUTE), false)
  assert.equal(svg.dataset.dshLucideIcon, undefined)
  assert.equal(svg.innerHTML, original)
  assert.equal(svg.layer, undefined)
  assert.equal(svg.getAttribute('viewBox'), '0 0 14 14')
  assert.equal(svg.getAttribute('fill'), 'currentColor')
  assert.equal(svg.hasAttribute('stroke'), false)
})

test('dispose preserves a previous dark theme', () => {
  const body = new FakeBody()
  body.setAttribute(DARK_ATTRIBUTE, '')
  const dispose = mount(body)
  dispose()

  assert.equal(body.hasAttribute(DARK_ATTRIBUTE), true)
})

test('unknown SVGs are left untouched', () => {
  const svg = new FakeSvg('M0 0h1v1Z')
  const original = svg.innerHTML
  const snapshots = new Map()

  assert.equal(replaceSvg(svg, snapshots), false)
  assert.equal(svg.innerHTML, original)
  assert.equal(snapshots.size, 0)
})

test('replacement is idempotent and exact restoration is reusable', () => {
  const svg = new FakeSvg()
  const snapshots = new Map()

  assert.equal(hashPath(CHECKLIST_PATH), 'd25323b0')
  assert.equal(DSH_ICON_REPLACEMENTS.d25323b0, 'list-checks')
  assert.equal(replaceSvg(svg, snapshots), true)
  assert.equal(replaceSvg(svg, snapshots), false)
  restoreSvg(svg, snapshots.get(svg))
  assert.equal(svg.dataset.dshLucideIcon, undefined)
  assert.match(svg.innerHTML, /M13\.3277/)
})

test('apply does not rewrite browser-normalized Lucide markup after its own mutation', () => {
  const svg = new BrowserNormalizedSvg()
  const body = new FakeBody([svg])
  mount(body)
  const observer = FakeObserver.instances.at(-1)

  assert.equal(svg.layerWrites, 1)
  observer.emit([{ target: svg, addedNodes: [], removedNodes: [] }])
  assert.equal(svg.layerWrites, 1)
})

test('settings plugin icon uses the Lucide plug glyph', () => {
  assert.equal(DSH_ICON_REPLACEMENTS['75b8640d'], 'plug')
})

test('registry covers the full DSH rc.6 icon set with Lucide markup', () => {
  const replacements = Object.values(DSH_ICON_REPLACEMENTS)
  assert.equal(Object.keys(DSH_ICON_REPLACEMENTS).length, 69)
  for (const icon of replacements) assert.ok(LUCIDE_ICON_MARKUP[icon], icon)
})

test('generated client bundle contains the standalone Lucide adapter', async () => {
  const client = await readFile(new URL('../client.js', import.meta.url), 'utf8')

  assert.match(client, /@zhangzujian\/dsh-theme-matcha-dark-sea/)
  assert.match(client, /data-dsh-matcha-dark-sea/)
  assert.match(client, /dshLucideIcon/)
  assert.match(client, /list-checks/)
  assert.match(client, /MutationObserver/)
})
