function $(selector) {
  return document.querySelector(selector)
}
Object.prototype.on = function(eventType, handler) {
  this.addEventListener(eventType, handler)
}
