function $(selector) {
  return document.querySelector(selector)
}
EventTarget.prototype.on = function(eventType, handler) {
  this.addEventListener(eventType, handler)
}
