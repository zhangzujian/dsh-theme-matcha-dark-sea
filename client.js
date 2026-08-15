window.__ModuleLoader__.load({
  id: "@zhangzujian/dsh-theme-matcha-dark-sea",
  factory: () => {
    const module = { exports: {} };
    const exports = module.exports;
    const css = "/*\n * Standalone DSH theme inspired by btop's matcha-dark-sea theme by\n * TheCynicalTeam. Original palette anchors are kept where practical:\n * #f8f8f2 foreground, #2eb398 sea accent, #0d493d selection,\n * #33b165 matcha green, #75715e outlines, and #595647 dividers.\n */\n\nbody[data-dsh-matcha-dark-sea] {\n  color-scheme: dark;\n  color: #f8f8f2;\n  background:\n    radial-gradient(circle at 18% -10%, rgba(46, 179, 152, 0.12), transparent 38rem),\n    linear-gradient(145deg, #101713 0%, #141c18 52%, #0f1916 100%);\n\n  --dsw-static-amber-100: #393721;\n  --dsw-static-amber-400: #d6ca69;\n  --dsw-static-amber-500: #e6db74;\n  --dsw-static-amber-600: #b9af58;\n  --dsw-static-amber-900: #27261b;\n  --dsw-static-blue-50: #142a27;\n  --dsw-static-blue-50p: #17312d;\n  --dsw-static-blue-75: #193732;\n  --dsw-static-blue-100: #1d443c;\n  --dsw-static-blue-300: #277c6b;\n  --dsw-static-blue-400: #2a9a82;\n  --dsw-static-blue-450: #2eb398;\n  --dsw-static-blue-500: #39c1a5;\n  --dsw-static-blue-600: #66d9ef;\n  --dsw-static-blue-800: #a5eef2;\n  --dsw-static-blue-900: #c9f5f1;\n  --dsw-static-blue-950: #e0faf6;\n  --dsw-static-deepseek-50: #142a27;\n  --dsw-static-deepseek-100: #193732;\n  --dsw-static-deepseek-200: #1d443c;\n  --dsw-static-deepseek-300: #236756;\n  --dsw-static-deepseek-400: #2a9a82;\n  --dsw-static-deepseek-450: #2eb398;\n  --dsw-static-deepseek-500: #33b165;\n  --dsw-static-deepseek-600: #66d9ef;\n  --dsw-static-deepseek-700-delete: #8fe6d3;\n  --dsw-static-deepseek-800: #bcefe3;\n  --dsw-static-deepseek-900: #ddf7ef;\n  --dsw-static-green-100: #183524;\n  --dsw-static-green-400: #48c777;\n  --dsw-static-green-500: #33b165;\n  --dsw-static-green-900: #14271b;\n  --dsw-static-neutral-00: #101713;\n  --dsw-static-neutral-50: #151e1a;\n  --dsw-static-neutral-100: #1a2520;\n  --dsw-static-neutral-150: #1e2b25;\n  --dsw-static-neutral-200: #26352e;\n  --dsw-static-neutral-250: #304139;\n  --dsw-static-neutral-300: #3b4c43;\n  --dsw-static-neutral-400: #595647;\n  --dsw-static-neutral-500: #75715e;\n  --dsw-static-neutral-550: #85816f;\n  --dsw-static-neutral-600: #989584;\n  --dsw-static-neutral-700: #b4b2a4;\n  --dsw-static-neutral-800: #d1d0c5;\n  --dsw-static-neutral-850: #dfded5;\n  --dsw-static-neutral-900: #ecebe4;\n  --dsw-static-neutral-1000: #f8f8f2;\n  --dsw-static-neutral-bluish-00: #101713;\n  --dsw-static-neutral-bluish-50: #131b17;\n  --dsw-static-neutral-bluish-60: #151e1a;\n  --dsw-static-neutral-bluish-75: #18211d;\n  --dsw-static-neutral-bluish-100: #1a2520;\n  --dsw-static-neutral-bluish-150: #1e2b25;\n  --dsw-static-neutral-bluish-200: #24332c;\n  --dsw-static-neutral-bluish-250: #2a3b33;\n  --dsw-static-neutral-bluish-300: #33483e;\n  --dsw-static-neutral-bluish-400: #4c6257;\n  --dsw-static-neutral-bluish-500: #64796f;\n  --dsw-static-neutral-bluish-600: #82958b;\n  --dsw-static-neutral-bluish-700: #a4b2ab;\n  --dsw-static-neutral-bluish-750: #b5c0ba;\n  --dsw-static-neutral-bluish-800: #c8d0cc;\n  --dsw-static-neutral-bluish-850: #d7dcd9;\n  --dsw-static-neutral-bluish-875: #e0e4e1;\n  --dsw-static-neutral-bluish-900: #e8ebe9;\n  --dsw-static-neutral-bluish-950: #f0f2f0;\n  --dsw-static-neutral-bluish-1000: #f8f8f2;\n  --dsw-static-red-50: #321d20;\n  --dsw-static-red-100: #47242a;\n  --dsw-static-red-400: #f28b8f;\n  --dsw-static-red-500: #f07178;\n  --dsw-static-red-600: #d95d65;\n  --dsw-static-red-900: #4b2025;\n\n  --dsw-alias-bg-base: #101713;\n  --dsw-alias-bg-layer-1: #151e1a;\n  --dsw-alias-bg-layer-2: #1a2520;\n  --dsw-alias-bg-layer-3: #213029;\n  --dsw-alias-bg-mask-1: rgba(3, 9, 7, 0.58);\n  --dsw-alias-bg-mask-2: rgba(3, 9, 7, 0.3);\n  --dsw-alias-bg-mask-3: rgba(3, 9, 7, 0.72);\n  --dsw-alias-bg-mask-photo: rgba(3, 9, 7, 0.9);\n  --dsw-alias-bg-mask-drop: rgba(16, 23, 19, 0.76);\n  --dsw-alias-bg-module-platform: #18211d;\n  --dsw-alias-bg-multi-select: #203a31;\n  --dsw-alias-bg-overlay: #26352e;\n  --dsw-alias-bg-skeleton: rgba(248, 248, 242, 0.07);\n  --dsw-alias-border-inverted2: rgba(248, 248, 242, 0.14);\n  --dsw-alias-border-inverted: rgba(248, 248, 242, 0.1);\n  --dsw-alias-border-l1: rgba(117, 113, 94, 0.28);\n  --dsw-alias-border-l2-darkmode-thin: rgba(117, 113, 94, 0.34);\n  --dsw-alias-border-l2: rgba(117, 113, 94, 0.42);\n  --dsw-alias-border-l3: rgba(117, 113, 94, 0.58);\n  --dsw-alias-border-l4: rgba(117, 113, 94, 0.72);\n  --dsw-alias-brand-primary-invert: #0f1916;\n  --dsw-alias-brand-primary-new-colorprimary-new-color: #2eb398;\n  --dsw-alias-brand-primary: #2eb398;\n  --dsw-alias-brand-text: #66d9ef;\n  --dsw-alias-button-contrast-fill: #2eb398;\n  --dsw-alias-button-elevated-fill: #213029;\n  --dsw-alias-button-floating-fill: #1a2520;\n  --dsw-alias-button-floating-hover: #294238;\n  --dsw-alias-button-ghost-active-border: #2eb398;\n  --dsw-alias-button-ghost-active-fill: #0d493d;\n  --dsw-alias-button-ghost-active-hover: #125a4b;\n  --dsw-alias-button-info-fill: #2eb398;\n  --dsw-alias-button-info-hover: #39c1a5;\n  --dsw-alias-button-primary-dimmed: #24463b;\n  --dsw-alias-button-primary-fill: #2eb398;\n  --dsw-alias-button-primary-hover: #39c1a5;\n  --dsw-alias-button-tool-bar-fill-invisible: rgba(46, 179, 152, 0.24);\n  --dsw-alias-button-tool-bar-fill: rgba(46, 179, 152, 0.38);\n  --dsw-alias-button-tool-bar-hover: rgba(46, 179, 152, 0.52);\n  --dsw-alias-interactive-bg-active: rgba(46, 179, 152, 0.2);\n  --dsw-alias-interactive-bg-hover-accent: rgba(46, 179, 152, 0.24);\n  --dsw-alias-interactive-bg-hover-danger: rgba(240, 113, 120, 0.16);\n  --dsw-alias-interactive-bg-hover-solid: #213029;\n  --dsw-alias-interactive-bg-hover: rgba(248, 248, 242, 0.07);\n  --dsw-alias-label-caption: #797667;\n  --dsw-alias-label-dimmed: #595647;\n  --dsw-alias-label-primary-bluish: #bcefe3;\n  --dsw-alias-label-primary-dimmed: #a6a392;\n  --dsw-alias-label-primary-foreground: #0f1916;\n  --dsw-alias-label-primary-inverted: #0f1916;\n  --dsw-alias-label-primary: #f8f8f2;\n  --dsw-alias-label-secondary: #c8c7ba;\n  --dsw-alias-label-tertiary: #989584;\n  --dsw-alias-markdown-citation: #213029;\n  --dsw-alias-markdown-code-block-banner: #151e1a;\n  --dsw-alias-markdown-code-block: #101713;\n  --dsw-alias-markdown-code-segment-selected: #26352e;\n  --dsw-alias-markdown-code-segment-unselected: #151e1a;\n  --dsw-alias-markdown-inline-code: #213029;\n  --dsw-alias-markdown-placeholder: #18211d;\n  --dsw-alias-markdown-tag: #213029;\n  --dsw-alias-scrollbar-bg-l1: #304139;\n  --dsw-alias-scrollbar-bg-l2: #3b4c43;\n  --dsw-alias-scrollbar-hover-l1: #4c6257;\n  --dsw-alias-scrollbar-hover-l2: #64796f;\n  --dsw-alias-state-business-primary: #2eb398;\n  --dsw-alias-state-business-tertiary: #0d493d;\n  --dsw-alias-state-error-primary: #f07178;\n  --dsw-alias-state-error-secondary: #f28b8f;\n  --dsw-alias-state-success-primary: #33b165;\n  --dsw-alias-state-success-secondary: #48c777;\n  --dsw-alias-state-success-tertiary: #183524;\n  --dsw-alias-state-warn-label: #e6db74;\n  --dsw-alias-state-warn-primary: #e6db74;\n  --dsw-alias-state-warn-secondary: #efe68e;\n  --dsw-alias-state-warn-tertiary: #393721;\n  --dsw-alias-toast-bg: #26352e;\n  --dsw-alias-tooltip-bg: #304139;\n  --dsw-specific-bubble-highlight: #125a4b;\n  --dsw-specific-bubble: #0d493d;\n  --dsw-specific-input-major: #18211d;\n  --dsw-specific-login-input: #151e1a;\n  --dsw-specific-menu: #213029;\n  --dsw-specific-selector: #1e2b25;\n  --dsw-specific-sidebar-fill: #131b17;\n  --dsw-specific-sidebar-nav-item-active-accent: #0d493d;\n  --dsw-specific-sidebar-nav-item-active: #203a31;\n  --dsw-specific-sidebar-nav-item-hover: #1a2923;\n  --dsw-specific-tip: #1a2520;\n\n  --dsh-scrollbar-thumb: #3b4c43;\n  --dsh-scrollbar-thumb-hover: #64796f;\n  --dsh-state-ongoing: #2eb398;\n  --dsw-shadow-lv1: 0 1px 2px rgba(0, 0, 0, 0.28);\n  --dsw-shadow-lv2: 0 8px 22px rgba(0, 0, 0, 0.34);\n  --dsw-shadow-lv3: 0 18px 48px rgba(0, 0, 0, 0.46);\n}\n\nbody[data-dsh-matcha-dark-sea] [id='root'] {\n  background: transparent;\n}\n\nbody[data-dsh-matcha-dark-sea] ::selection {\n  color: #f8f8f2;\n  background: #0d493d;\n}\n\nbody[data-dsh-matcha-dark-sea] a {\n  color: #66d9ef;\n}\n\nbody[data-dsh-matcha-dark-sea] a:visited {\n  color: #d8b8b2;\n}\n\nbody[data-dsh-matcha-dark-sea] :focus-visible {\n  outline: 2px solid #2eb398;\n  outline-offset: 2px;\n}\n\nbody[data-dsh-matcha-dark-sea]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\nbody[data-dsh-matcha-dark-sea]::-webkit-scrollbar-track,\nbody[data-dsh-matcha-dark-sea]::-webkit-scrollbar-corner {\n  background: #101713;\n}\n\nbody[data-dsh-matcha-dark-sea]::-webkit-scrollbar-thumb {\n  background: #3b4c43;\n  border: 2px solid #101713;\n  border-radius: 5px;\n}\n\nbody[data-dsh-matcha-dark-sea]::-webkit-scrollbar-thumb:hover {\n  background: #64796f;\n}\n\nbody[data-dsh-matcha-dark-sea] svg[data-dsh-lucide-icon] {\n  shape-rendering: geometricPrecision;\n}\n\nbody[data-dsh-matcha-dark-sea] svg[data-dsh-lucide-icon] > :not([data-dsh-lucide-layer]) {\n  display: none;\n}\n\nbody[data-dsh-matcha-dark-sea] svg[data-dsh-lucide-icon] > [data-dsh-lucide-layer] {\n  display: initial;\n}\n";
    const tagId = "@zhangzujian/dsh-theme-matcha-dark-sea/theme.css";
    if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + ']') === null) {
      const tag = document.createElement('style');
      tag.dataset.plugin = "@zhangzujian/dsh-theme-matcha-dark-sea";
      tag.dataset.pluginCss = tagId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }
    const DSH_ICON_REPLACEMENTS = Object.freeze({"5ae795a2":"message-circle-plus","edd45d4a":"search","f23b4789":"globe","4b50e649":"settings","f40e694e":"settings","78eea2fd":"panel-left","a9367dfd":"ellipsis","eebcc4ca":"plus","a045eea8":"check","d7c14692":"check","b3400127":"git-branch","8634df9d":"chevron-down","8bd518f9":"chevron-left","4c74fdb4":"chevron-right","98dc05ed":"triangle-right","aca5a4e7":"chevron-up","a72173d8":"x","24e2fedd":"x","ae4e6054":"copy","7064ea2b":"refresh-cw","42ec0a0d":"refresh-cw","888d5160":"thumbs-up","a9c3e2e2":"thumbs-up","9b087e69":"thumbs-down","fd625226":"thumbs-down","62db06c4":"share-2","cd7976ad":"pencil","47f5c258":"brain","7898d57e":"brain","4646ab9e":"bot","463fb340":"folder-search","01620480":"link","a581b752":"link","5f0395a0":"arrow-up-right","01af880e":"arrow-up-right","6fc6aa25":"wand-sparkles","3952e481":"trash-2","d05fba3b":"triangle-alert","6617f3b4":"user","e3a61c33":"send","a9bfc964":"square","43a1af0d":"paperclip","b0f1a506":"loader-circle","4ce8ecc3":"download","d05ba8ba":"play","3c40a92a":"pause","22f6f5a5":"maximize","e9449253":"code-2","7f0b8f38":"plug","160df988":"braces","75b8640d":"swatch-book","d9194cf1":"folder-plus","07841c3a":"folder-open","23a20088":"folder","7084271e":"corner-down-right","90896c6d":"sun","6711b7ef":"moon","5ba14d92":"monitor","d159942f":"database","e492525c":"send","5a505ae7":"list-ordered","d25323b0":"list-checks","034a3d07":"notebook-pen","24ecf6e5":"target","a841cf90":"sparkles","886ca866":"scan-search","b49f5f48":"wand-sparkles","f9492704":"circle-help","b630f8bd":"archive"});
    const LUCIDE_ICON_MARKUP = Object.freeze({"archive":"<rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\" /><path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8\" /><path d=\"M10 12h4\" />","arrow-up-right":"<path d=\"M7 7h10v10\" /><path d=\"M7 17 17 7\" />","bot":"<path d=\"M12 8V4H8\" /><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\" /><path d=\"M2 14h2\" /><path d=\"M20 14h2\" /><path d=\"M15 13v2\" /><path d=\"M9 13v2\" />","braces":"<path d=\"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1\" /><path d=\"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1\" />","brain":"<path d=\"M12 18V5\" /><path d=\"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4\" /><path d=\"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5\" /><path d=\"M17.997 5.125a4 4 0 0 1 2.526 5.77\" /><path d=\"M18 18a4 4 0 0 0 2-7.464\" /><path d=\"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517\" /><path d=\"M6 18a4 4 0 0 1-2-7.464\" /><path d=\"M6.003 5.125a4 4 0 0 0-2.526 5.77\" />","check":"<path d=\"M20 6 9 17l-5-5\" />","chevron-down":"<path d=\"m6 9 6 6 6-6\" />","chevron-left":"<path d=\"m15 18-6-6 6-6\" />","chevron-right":"<path d=\"m9 18 6-6-6-6\" />","chevron-up":"<path d=\"m18 15-6-6-6 6\" />","circle-help":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /><path d=\"M12 17h.01\" />","code-2":"<path d=\"m18 16 4-4-4-4\" /><path d=\"m6 8-4 4 4 4\" /><path d=\"m14.5 4-5 16\" />","copy":"<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />","corner-down-right":"<path d=\"m15 10 5 5-5 5\" /><path d=\"M4 4v7a4 4 0 0 0 4 4h12\" />","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\" /><path d=\"M3 5V19A9 3 0 0 0 21 19V5\" /><path d=\"M3 12A9 3 0 0 0 21 12\" />","download":"<path d=\"M12 15V3\" /><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><path d=\"m7 10 5 5 5-5\" />","ellipsis":"<circle cx=\"12\" cy=\"12\" r=\"1\" /><circle cx=\"19\" cy=\"12\" r=\"1\" /><circle cx=\"5\" cy=\"12\" r=\"1\" />","folder":"<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\" />","folder-open":"<path d=\"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2\" />","folder-plus":"<path d=\"M12 10v6\" /><path d=\"M9 13h6\" /><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\" />","folder-search":"<path d=\"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1\" /><path d=\"m21 21-1.9-1.9\" /><circle cx=\"17\" cy=\"17\" r=\"3\" />","git-branch":"<path d=\"M15 6a9 9 0 0 0-9 9V3\" /><circle cx=\"18\" cy=\"6\" r=\"3\" /><circle cx=\"6\" cy=\"18\" r=\"3\" />","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /><path d=\"M2 12h20\" />","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" />","list-checks":"<path d=\"M13 5h8\" /><path d=\"M13 12h8\" /><path d=\"M13 19h8\" /><path d=\"m3 17 2 2 4-4\" /><path d=\"m3 7 2 2 4-4\" />","list-ordered":"<path d=\"M11 5h10\" /><path d=\"M11 12h10\" /><path d=\"M11 19h10\" /><path d=\"M4 4h1v5\" /><path d=\"M4 9h2\" /><path d=\"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02\" />","loader-circle":"<path d=\"M21 12a9 9 0 1 1-6.219-8.56\" />","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3\" /><path d=\"M21 8V5a2 2 0 0 0-2-2h-3\" /><path d=\"M3 16v3a2 2 0 0 0 2 2h3\" /><path d=\"M16 21h3a2 2 0 0 0 2-2v-3\" />","message-circle-plus":"<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\" /><path d=\"M8 12h8\" /><path d=\"M12 8v8\" />","monitor":"<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\" /><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\" /><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\" />","moon":"<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />","notebook-pen":"<path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4\" /><path d=\"M2 6h4\" /><path d=\"M2 10h4\" /><path d=\"M2 14h4\" /><path d=\"M2 18h4\" /><path d=\"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\" />","panel-left":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M9 3v18\" />","paperclip":"<path d=\"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551\" />","pause":"<rect x=\"14\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" /><rect x=\"5\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\" />","pencil":"<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /><path d=\"m15 5 4 4\" />","play":"<path d=\"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z\" />","plug":"<path d=\"M12 22v-5\" /><path d=\"M15 8V2\" /><path d=\"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z\" /><path d=\"M9 8V2\" />","plus":"<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />","refresh-cw":"<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /><path d=\"M21 3v5h-5\" /><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /><path d=\"M8 16H3v5\" />","scan-search":"<path d=\"M3 7V5a2 2 0 0 1 2-2h2\" /><path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" /><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /><path d=\"m16 16-1.9-1.9\" />","search":"<path d=\"m21 21-4.34-4.34\" /><circle cx=\"11\" cy=\"11\" r=\"8\" />","send":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" />","settings":"<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\" /><circle cx=\"6\" cy=\"12\" r=\"3\" /><circle cx=\"18\" cy=\"19\" r=\"3\" /><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />","sparkles":"<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\" /><path d=\"M20 2v4\" /><path d=\"M22 4h-4\" /><circle cx=\"4\" cy=\"20\" r=\"2\" />","square":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" />","sun":"<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" />","swatch-book":"<path d=\"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z\" /><path d=\"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7\" /><path d=\"M 7 17h.01\" /><path d=\"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8\" />","target":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><circle cx=\"12\" cy=\"12\" r=\"6\" /><circle cx=\"12\" cy=\"12\" r=\"2\" />","thumbs-down":"<path d=\"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z\" /><path d=\"M17 14V2\" />","thumbs-up":"<path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\" /><path d=\"M7 10v12\" />","trash-2":"<path d=\"M10 11v6\" /><path d=\"M14 11v6\" /><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\" /><path d=\"M3 6h18\" /><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />","triangle-alert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /><path d=\"M12 9v4\" /><path d=\"M12 17h.01\" />","triangle-right":"<path d=\"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z\" />","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" />","wand-sparkles":"<path d=\"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72\" /><path d=\"m14 7 3 3\" /><path d=\"M5 6v4\" /><path d=\"M19 14v4\" /><path d=\"M10 2v2\" /><path d=\"M7 8H3\" /><path d=\"M21 16h-4\" /><path d=\"M11 3H9\" />","x":"<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />"});
    const LUCIDE_ATTRIBUTES = [
  'viewBox',
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
]
const LUCIDE_LAYER_SELECTOR = ':scope > g[data-dsh-lucide-layer]'

function hashPath(value) {
  let result = 0x811c9dc5
  for (let index = 0; index < value.length; index++) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 0x01000193)
  }
  return (result >>> 0).toString(16).padStart(8, '0')
}

function identifyIcon(svg) {
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

function replaceSvg(svg, snapshots) {
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

function restoreSvg(svg, snapshot) {
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
function installLucideIcons(root, Observer = globalThis.MutationObserver) {
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
    const THEME_ATTRIBUTE = 'data-dsh-matcha-dark-sea'
const DARK_ATTRIBUTE = 'data-ds-dark-theme'

/**
 * Apply the theme and register an exact disposer through the Cordis context.
 * The previous DSH dark-mode marker is restored when the plugin unloads.
 */
function apply(ctx) {
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
    exports.apply = apply;
    return module.exports;
  },
});
