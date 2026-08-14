import { readFile, writeFile } from 'node:fs/promises'
import { apply, DARK_ATTRIBUTE, THEME_ATTRIBUTE } from '../src/apply.mjs'

const PACKAGE_ID = '@zhangzujian/dsh-theme-matcha-dark-sea'
const css = await readFile(new URL('../src/theme.css', import.meta.url), 'utf8')

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
    const THEME_ATTRIBUTE = ${JSON.stringify(THEME_ATTRIBUTE)};
    const DARK_ATTRIBUTE = ${JSON.stringify(DARK_ATTRIBUTE)};
    ${apply.toString()}
    exports.apply = apply;
    return module.exports;
  },
});
`

await writeFile(new URL('../client.js', import.meta.url), output)
