const raf = require('.')

const render = raf(function ({ time }) {
  document.body.textContent = `Update on ${time}`
})

// Called every 4ms, but will only render efter animation frame
setInterval(render, 4, { time: Date.now() })
