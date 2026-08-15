import { DSH_ICON_REPLACEMENTS, LUCIDE_ICON_MARKUP } from './icon-registry.mjs'

const LUCIDE_ATTRIBUTES = [
  'viewBox',
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
]
const LUCIDE_LAYER_SELECTOR = ':scope > g[data-dsh-lucide-layer]'

export function hashPath(value) {
  let result = 0x811c9dc5
  for (let index = 0; index < value.length; index++) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 0x01000193)
  }
  return (result >>> 0).toString(16).padStart(8, '0')
}

export function identifyIcon(svg) {
  const current = svg.dataset.dshLucideIcon
  if (current && LUCIDE_ICON_MARKUP[current]) return current

  const path = svg.querySelector('path[d]')
  const data = path?.getAttribute('d')
  return data ? DSH_ICON_REPLACEMENTS[hashPath(data)] : undefined
}

function snapshotSvg(svg) {
  const attributes = {}
  for (const name of LUCIDE_ATTRIBUTES) {
    attributes[name] = svg.hasAttribute(name) ? svg.getAttribute(name) : null
  }
  return { attributes }
}

function restoreAttribute(svg, name, value) {
  if (value === null) svg.removeAttribute(name)
  else svg.setAttribute(name, value)
}

function lucideLayer(svg) {
  return svg.querySelector(LUCIDE_LAYER_SELECTOR)
}

function appendLucideLayer(svg, icon, markup) {
  svg.insertAdjacentHTML(
    'beforeend',
    `<g data-dsh-lucide-layer="${icon}">${markup}</g>`,
  )
  return lucideLayer(svg)
}

export function replaceSvg(svg, snapshots) {
  const icon = identifyIcon(svg)
  if (!icon) return false

  const markup = LUCIDE_ICON_MARKUP[icon]
  if (!snapshots.has(svg)) snapshots.set(svg, snapshotSvg(svg))

  let layer = lucideLayer(svg)
  const unchanged = svg.dataset.dshLucideIcon === icon
    && layer?.innerHTML === markup
    && svg.getAttribute('viewBox') === '0 0 24 24'
  if (unchanged) return false

  if (!layer) layer = appendLucideLayer(svg, icon, markup)
  else {
    layer.dataset.dshLucideLayer = icon
    layer.innerHTML = markup
  }

  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '1.8')
  svg.setAttribute('stroke-linecap', 'round')
  svg.setAttribute('stroke-linejoin', 'round')
  svg.dataset.dshLucideIcon = icon
  return true
}

export function restoreSvg(svg, snapshot) {
  lucideLayer(svg)?.remove()
  for (const [name, value] of Object.entries(snapshot.attributes)) {
    restoreAttribute(svg, name, value)
  }
  delete svg.dataset.dshLucideIcon
}

function visitSvgs(node, callback) {
  if (!node || node.nodeType !== 1) return
  if (node.matches?.('svg')) callback(node)
  for (const svg of node.querySelectorAll?.('svg') ?? []) callback(svg)
}

function closestSvg(node) {
  if (!node || node.nodeType !== 1) return undefined
  return node.matches?.('svg') ? node : node.closest?.('svg')
}

/**
 * Overlay current and future DSH rc.6 official icon SVGs with Lucide glyphs.
 * Original React-owned SVG children remain in place and are hidden by scoped
 * CSS, which avoids invalidating React's node references. Unknown and
 * plugin-owned SVGs are left untouched. Unload removes the overlay and
 * restores every changed root attribute.
 */
export function installLucideIcons(root, Observer = globalThis.MutationObserver) {
  const snapshots = new Map()
  let replaced = 0
  const process = (svg) => {
    if (replaceSvg(svg, snapshots)) replaced += 1
  }

  visitSvgs(root, process)

  const observer = new Observer((mutations) => {
    for (const mutation of mutations) {
      const owner = closestSvg(mutation.target)
      if (owner) process(owner)

      for (const node of mutation.addedNodes ?? []) visitSvgs(node, process)
      for (const node of mutation.removedNodes ?? []) {
        visitSvgs(node, (svg) => snapshots.delete(svg))
      }
    }
  })
  observer.observe(root, {
    attributes: true,
    attributeFilter: ['d', 'viewBox'],
    childList: true,
    subtree: true,
  })

  return {
    get replacedCount() {
      return replaced
    },
    dispose() {
      observer.disconnect()
      for (const [svg, snapshot] of snapshots) {
        if (svg.isConnected !== false) restoreSvg(svg, snapshot)
      }
      snapshots.clear()
    },
  }
}
