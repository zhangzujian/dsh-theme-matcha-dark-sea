import { installLucideIcons } from './icons.mjs'

export const THEME_ATTRIBUTE = 'data-dsh-matcha-dark-sea'
export const DARK_ATTRIBUTE = 'data-ds-dark-theme'

/**
 * Apply the theme and register an exact disposer through the Cordis context.
 * The previous DSH dark-mode marker is restored when the plugin unloads.
 */
export function apply(ctx) {
  const body = document.body
  const hadDarkTheme = body.hasAttribute(DARK_ATTRIBUTE)

  body.setAttribute(THEME_ATTRIBUTE, '')
  body.setAttribute(DARK_ATTRIBUTE, '')
  const icons = installLucideIcons(body)

  ctx.effect(() => () => {
    icons.dispose()
    body.removeAttribute(THEME_ATTRIBUTE)
    if (hadDarkTheme) body.setAttribute(DARK_ATTRIBUTE, '')
    else body.removeAttribute(DARK_ATTRIBUTE)
  }, 'ui-theme-matcha-dark-sea: palette')
}
