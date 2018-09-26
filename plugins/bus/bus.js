'use strict';
let instance = null;

class EventBus {
  constructor () {
    if (!instance) {
      this.events = {};
      instance = this;
    }
    return instance;
  }
  $emit (event, message) {
    if (!this.events[event]) return;

    this.events[event].forEach(function (item) { item.call(this, message); });
  }
  $on (event, callback) {
    if (!this.events[event]) { this.events[event] = []; }
    this.events[event].push(callback);
  }
  $off (event) {
    if (this.events[event]) {
      delete this.events[event];
    }
  }
}
export default new EventBus();
