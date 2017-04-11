const loadScript = require('load-script')

// mathjax cdn shutdown the 30/04/2017!!! https://cdn.mathjax.org/mathjax/latest/MathJax.js
const DEFAULT_SCRIPT = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js'

const DEFAULT_OPTIONS = {
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/CommonHTML'],
  TeX: {
    extensions: ['AMSmath.js', 'AMSsymbols.js'],
    // ,"noErrors.js","noUndefined.js"
  },
  messageStyles: 'none',
  showProcessingMessages: false,
  showMathMenu: false,
  showMathMenuMSIE: false,
  preview: 'none',
  tex2jax: {
    // inlineMath: [],
    preview: 'none',
    processEnvironments: false,
  },
  delayStartupTypeset: true,
  // "HTML-CSS": { availableFonts: ["STIX","TeX"] }
}

const loadMathJax = (
  script = DEFAULT_SCRIPT,
  options = DEFAULT_OPTIONS,
) => {
  if (window.MathJax) {
    window.MathJax.Hub.Config(options)
    return
  }
  loadScript(script, () => {
    window.MathJax.Hub.Config(options)
  })
}

export default loadMathJax
