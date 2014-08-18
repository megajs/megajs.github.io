function $(selector) {
  return document.querySelector(selector)
}
window.on = function(eventType, handler) {
  this.addEventListener(eventType, handler)
}
Element.prototype.on = window.on
