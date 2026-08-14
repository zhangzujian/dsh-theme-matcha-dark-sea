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

The project uses only Node.js for its deterministic build and tests. `scripts/build.mjs` embeds the scoped CSS and the Cordis `apply()` entry into the DSH browser module-loader artifact.

```sh
npm run build
npm test
npm pack --dry-run
```

No browser is required for these checks.
