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

// let objectXPosition = 0;
// let objectYPosition = 0;

// const animationLoop = () => {
//   /** 
//    * clearRect(startingXPosition, startingYPosition, totalWidthToErase, totalHeightToErase) 
//    * resource - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
//    */
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   /** 
//    * fillRect(startingXPosition, startingYPosition, totalWidthToFill, totalHeightToFill) 
//    * default color is black
//    * resource - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
//    */
//   context.fillRect(objectXPosition++, objectYPosition++, 40, 40);
//   /**
//    * requestAnimationFrame(callbackFunction)
//    * resource - https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//    */
//   requestAnimationFrame(animationLoop)
// }



const spriteImg = new Image();
      spriteImg.src = "../images/hg-sprite.png";

let spriteX = 0;
let spriteY = 704;
let canvasX = 0
let canvasY = 0
let gameOver = false

// 
let fire = false
let fireX = 64
let fireY = 32

document.body.onkeydown = function (e) {
  // if(gameOver === false )
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38:
      // up
      spriteX = 0
      break;
    case 40:
      // down
      spriteX = 0
      break;
    case 37:
      // left
      spriteX = 0
      break;
    case 39:
      //right
      if(spriteY !== 704){
        spriteY = 704
      }
      if(spriteX >= 512){
        spriteX = 0
      }
      spriteX +=64
      canvasX += 2
      break;
    case 32:
      // fire
      fire = true
      break;
    default:
      break;
  }
};


document.body.onkeyup = function (e) {
  // if(gameOver === false )
  console.log(e.keyCode)
  if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40){
    // spriteY = 576
    // spriteX = 0
  }
};

const animationLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(spriteImg, spriteX, spriteY, 64, 64, canvasX, canvasY, 64, 64);
  if(fire){
    context.fillRect(fireX, fireY++, 10, 10)
  }

  requestAnimationFrame(animationLoop)
}

/**
 * 1. assign a key to fire
 * 2. everytime you fire create a new bullet (probably want to create a bullet and push it to an array)
 * 3. inside the animation create a loop to draw all the bullets you have created (fillRect(paddleX, paddleY, w, h))
 * 4. keep increase the x or y position of the bullet
 */

animationLoop()