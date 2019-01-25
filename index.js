// in variables so we can remove them in a node context
const cancelAnimationFrame = window.cancelAnimationFrame
const requestAnimationFrame = window.requestAnimationFrame

module.exports = function (fn) {
  var queued
  return function (...args) {
    if (queued) cancelAnimationFrame(queued)

    queued = requestAnimationFrame(fn.bind(fn, args))
  }
}
