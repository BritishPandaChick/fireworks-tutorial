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
