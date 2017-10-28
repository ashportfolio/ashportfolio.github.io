/**
 *
 * javascript full-screen window technology - fullscreen mode
 *
 * Copyright 2013, Dhiraj kumar
 * http://www.css-jquery-design.com/
 */

// mozfullscreenerror event handler
function errorHandler() {
   alert('mozfullscreenerror');
}
document.documentElement.addEventListener('mozfullscreenerror', errorHandler, false);

// toggle full screen
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
      document.getElementById('boday').classList.add('pos');
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      document.getElementById('boday').classList.add('pos');
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
      document.getElementById('boday').classList.add('pos');
    }
  }
}

// keydown event handler
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 13 || e.keyCode == 70) { // F or Enter key
    toggleFullScreen();
  }
}, false);
