# dsh-theme-matcha-dark-sea

A standalone theme plugin for the DeepSeek Harness Web GUI, inspired by btop's `matcha-dark-sea` theme by TheCynicalTeam.

This repository is an independent DSH plugin. It does not depend on or modify `dsh-web-ui`.

## Palette

The DSH semantic token mapping keeps the original btop theme anchors:

- foreground: `#f8f8f2`
- sea accent: `#2eb398`
- selected sea: `#0d493d`
- matcha green: `#33b165`
- outlines: `#75715e`
- inactive and divider color: `#595647`
- supporting cyan, yellow, violet, and rose colors from the original graphs

The plugin is intentionally dark-only. It records the existing DSH dark-mode marker, enables dark mode while mounted, and restores the previous state when unloaded.

## Lucide icons

The plugin also replaces the complete DSH `0.1.0-rc.6` application icon set with Lucide glyphs. It fingerprints only the official DSH SVG path data, so unrelated SVGs from messages or third-party plugins are not modified.

A `MutationObserver` applies the mapping to icons rendered after startup. The adapter preserves each original SVG and restores it exactly when the plugin unloads. Selected Lucide 1.31.0 SVG data and license notices are included in the package.

## Install

From GitHub:

```sh
dsh plugin --profile web add github:zhangzujian/dsh-theme-matcha-dark-sea
```

Add the package to the Web profile bundle list:

```json
"@zhangzujian/dsh-theme-matcha-dark-sea"
```

A DSH restart is required for a changed profile bundle list to take effect.

## Development

The project uses only Node.js for its deterministic build and tests. `scripts/build.mjs` embeds the scoped CSS, Lucide registry, DOM adapter, and Cordis `apply()` entry into the DSH browser module-loader artifact.

```sh
npm run build
npm test
npm pack --dry-run
```

No browser is required for these checks.
