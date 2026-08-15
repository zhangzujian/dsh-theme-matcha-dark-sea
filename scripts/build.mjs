import { readFile, writeFile } from 'node:fs/promises'
import { DSH_ICON_REPLACEMENTS, LUCIDE_ICON_MARKUP } from '../src/icon-registry.mjs'

const PACKAGE_ID = '@zhangzujian/dsh-theme-matcha-dark-sea'
const css = await readFile(new URL('../src/theme.css', import.meta.url), 'utf8')

function browserSource(source) {
  return source
    .replace(/^import .*$/gm, '')
    .replace(/\bexport /g, '')
    .trim()
}

const iconSource = browserSource(await readFile(new URL('../src/icons.mjs', import.meta.url), 'utf8'))
const applySource = browserSource(await readFile(new URL('../src/apply.mjs', import.meta.url), 'utf8'))

const output = `window.__ModuleLoader__.load({
  id: ${JSON.stringify(PACKAGE_ID)},
  factory: () => {
    const module = { exports: {} };
    const exports = module.exports;
    const css = ${JSON.stringify(css)};
    const tagId = ${JSON.stringify(`${PACKAGE_ID}/theme.css`)};
    if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + ']') === null) {
      const tag = document.createElement('style');
      tag.dataset.plugin = ${JSON.stringify(PACKAGE_ID)};
      tag.dataset.pluginCss = tagId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }
    const DSH_ICON_REPLACEMENTS = Object.freeze(${JSON.stringify(DSH_ICON_REPLACEMENTS)});
    const LUCIDE_ICON_MARKUP = Object.freeze(${JSON.stringify(LUCIDE_ICON_MARKUP)});
    ${iconSource}
    ${applySource}
    exports.apply = apply;
    return module.exports;
  },
});
`

await writeFile(new URL('../client.js', import.meta.url), output)
