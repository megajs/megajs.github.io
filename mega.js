function $(selector) {
  return document.querySelector(selector)
}
Element.prototype.on = function(eventType, handler) {
  this.addEventListener(eventType, handler)
}
window.on = Element.prototype.on
