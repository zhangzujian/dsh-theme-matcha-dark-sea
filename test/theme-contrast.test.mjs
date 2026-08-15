import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const css = await readFile(new URL('../src/theme.css', import.meta.url), 'utf8')

function color(pattern) {
  const match = css.match(pattern)
  assert.ok(match, pattern.source)
  return match[1]
}

function luminance(hex) {
  const channels = [1, 3, 5].map((offset) => {
    const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(left, right) {
  const values = [luminance(left), luminance(right)].sort((a, b) => b - a)
  return (values[0] + 0.05) / (values[1] + 0.05)
}

test('context-meter system and remaining colors separate from the panel surface', () => {
  const panel = color(/--dsw-specific-menu:\s*(#[0-9a-f]{6})/i)
  const system = color(/\.JObwrW_colorSystem\s*\{[^}]*--meter-tint:\s*(#[0-9a-f]{6})/i)
  const remaining = color(/\.JObwrW_bar\s*\{[^}]*background:\s*(#[0-9a-f]{6})/i)

  assert.ok(contrast(system, panel) >= 4.5, `${system} on ${panel}`)
  assert.ok(contrast(remaining, panel) >= 3, `${remaining} on ${panel}`)
  assert.notEqual(system, remaining)
})
