
class trackTouches{
  constructor(element,__callback){
    this.initialX = null;
  	this.initialY = null;
    this.element = element;
    this.__callback = __callback;
    element.addEventListener("touchstart", this.startTouch.bind(this), false);
    element.addEventListener("touchmove", this.moveTouch.bind(this), false);
  }
  startTouch(e){
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  }
  moveTouch(e){
    if (this.initialX === null) {
      return;
    }
    if (this.initialY === null) {
      return;
    }
    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let diffX = this.initialX - currentX;
    let diffY = this.initialY - currentY;
    let eventResponse = {};
    eventResponse.currentX = currentX;
    eventResponse.currentY = currentY;
    let eventString = "";
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        eventString = "Left";
      } else {
        eventString = "Right";
      }
    } else {
      if (diffY > 0) {
        eventString = "Up";
      } else {
        eventString = "Down";
      }
    }
    eventResponse.eventString = eventString;
    this.__callback(eventResponse);
    this.initialX = null;
    this.initialY = null;
  }
  destroyTouchEvent(){
      console.log(this.element)
      this.element.removeEventListener("touchstart",this.startTouch,false);
      this.element.removeEventListener("touchmove",this.moveTouch,false);
  }
}
