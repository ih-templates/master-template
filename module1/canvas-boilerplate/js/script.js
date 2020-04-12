/**
 * Canvas
 * - Canvas is used to draw 2d graphics with JavaScript
 * - <canvas> only has two attributes: width and height (the default for these values are 
 * w: 300 and h:150)
 * - DO NOT set the canvas width and height through CSS. CSS doesn't respect the ratio of the 
 * initial canvas; thus, it will appear distorted
 * 
 * Initial setup
 * - index.html with canvas tag and linking the JS file 
 */


/** 
 * <canvas> tag is used to draw graphics; however, <canvas> has not drawing abilities on its own 
 * (it is only a container for graphics similar to the <img>) - you must use a script to actually 
 * draw the graphics
 * resource - https://www.w3schools.com/tags/ref_canvas.asp
 */
const canvas = document.querySelector("canvas");  
console.log(canvas);
console.log(typeof canvas);
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
/**
 * getContext('2d') returns an object with methods and properties, which can be used to draw text, 
 * lines, boxes, circles, and more on the canvas
 * resource - https://www.w3schools.com/tags/ref_canvas.asp
 */
let context = canvas.getContext('2d');
console.log(context);
console.log(typeof context);

let objectXPosition = 0;
let objectYPosition = 0;

const animationLoop = () => {
  /** 
   * clearRect(startingXPosition, startingYPosition, totalWidthToErase, totalHeightToErase) 
   * resource - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
   */
  context.clearRect(0, 0, canvas.width, canvas.height);
  /** 
   * fillRect(startingXPosition, startingYPosition, totalWidthToFill, totalHeightToFill) 
   * default color is black
   * resource - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
   */
  context.fillRect(objectXPosition++, objectYPosition++, 40, 40);
  /**
   * requestAnimationFrame(callbackFunction)
   * resource - https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
   */
  requestAnimationFrame(animationLoop)
}

animationLoop()