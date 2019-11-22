// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
//not supported in all browsers though and sometimes need a prefix, so we need a shim
window.requestAnimFrame = (function(){
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback){
      window.setTimeout(callback, 1000/60);
    };
})();

//now we will setup our basic variables for the demo
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  //full screen dimensions
  cw = window.innerWidth,
  ch = window.innerHeight,
  //firework collection
  fireworks = [],
  //particle collection
  particles = [],
  //starting hue
  hue = 120,
  //when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
  limiterTotal = 5,
  limiterTick = 0,
  //this will time the auto launches of fireworks, one launch per 80 loop ticks
  timerTotal = 80,
  timerTick = 0,
  mousedown = false,
  //mouse x coordinate
  mx,
  //mouse y coordinate
  my;

//set canvas dimensions
canvas.width = cw;
canvas.height = ch;

//setup function placeholders

//get random number within a range
function random(min, max){
  return Math.random() *
}

//calculate the distance between two points
function calculateDistance(p1x, p1y, p2x, p2y){
  var xDistance = p1x - p2x,
      yDistance = p1y - p2y,
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

//create firework
function Firework(sx, sy, tx, ty){
  //actual coordinates
  this.x = sx;
  this.y = sy;
  //starting coordinates
  this.sx = sx;
  this.sy = sy;
  //target coordinates
  this.tx = tx;
  this.ty = ty;
  //distance from starting point to target
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
  this.distanceTraveled = 0;
  // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
  this.coordinates = [];
  this.coordinateCount = 3;
  //populate initial coordinate collection with the current
  while(this.coordinateCount--){
    this.coordinates.push([this.x, this.y]);
  }
  this.angle = Math.atan2(ty - sy, tx - sx);
  this.speed = 2;
  this.acceleration = 1.05;
  this.brightness = random(50, 70);
}

//update firework
Firework.prototype.update = function(index) {

}

//draw firework
Firework.prototype.draw = function(){

}

//create particle
function Particle(x,y){}

//update particle
Particle.prototype.update = function(index){

}

//draw particle
Particle.prototype.draw = function(){

}

//create particle group/explosion
function createParticles(x,y){

}

//main demo loop
function loop(){}

//mouse event bindings
//update the mouse coordinates on mousemove
canvas.addEventListener('mousemove', function(e){

});

//toggle mousedown state and prevent canvas from being selected
canvas.addEventListener("mousedown", function(e){

});

canvas.addEventListener("mouseup", function(e){

});

//once the window loads, we are ready for some fireworks!
window.onload = loop;
