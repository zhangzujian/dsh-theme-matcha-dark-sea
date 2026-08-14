import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { apply, DARK_ATTRIBUTE, THEME_ATTRIBUTE } from '../src/apply.mjs'

class FakeBody {
  #attributes = new Set()

  hasAttribute(name) {
    return this.#attributes.has(name)
  }

  setAttribute(name) {
    this.#attributes.add(name)
  }

  removeAttribute(name) {
    this.#attributes.delete(name)
  }
}

function mount(body) {
  let dispose
  globalThis.document = { body }
  apply({
    effect(factory) {
      dispose = factory()
    },
  })
  return () => dispose()
}

test.afterEach(() => {
  delete globalThis.document
})

test('apply enables the scoped theme and dark marker', () => {
  const body = new FakeBody()
  mount(body)

  assert.equal(body.hasAttribute(THEME_ATTRIBUTE), true)
  assert.equal(body.hasAttribute(DARK_ATTRIBUTE), true)
})

test('dispose restores a previous light theme', () => {
  const body = new FakeBody()
  const dispose = mount(body)
  dispose()

  assert.equal(body.hasAttribute(THEME_ATTRIBUTE), false)
  assert.equal(body.hasAttribute(DARK_ATTRIBUTE), false)
})

test('dispose preserves a previous dark theme', () => {
  const body = new FakeBody()
  body.setAttribute(DARK_ATTRIBUTE, '')
  const dispose = mount(body)
  dispose()

  assert.equal(body.hasAttribute(THEME_ATTRIBUTE), false)
  assert.equal(body.hasAttribute(DARK_ATTRIBUTE), true)
})

test('generated client bundle contains the standalone package and palette', async () => {
  const client = await readFile(new URL('../client.js', import.meta.url), 'utf8')

  assert.match(client, /@zhangzujian\/dsh-theme-matcha-dark-sea/)
  assert.match(client, /#2eb398/)
  assert.match(client, /#0d493d/)
  assert.match(client, /data-dsh-matcha-dark-sea/)
})
