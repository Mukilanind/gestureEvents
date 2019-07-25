
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
    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;
    var diffX = this.initialX - currentX;
    var diffY = this.initialY - currentY;
    var eventString = "";
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
    this.__callback(eventString);
    this.initialX = null;
    this.initialY = null;
  }
  destroyTouchEvent(){
      console.log(this.element)
      this.element.removeEventListener("touchstart",this.startTouch,false);
      this.element.removeEventListener("touchmove",this.moveTouch,false);
  }
}
