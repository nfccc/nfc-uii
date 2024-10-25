// fullscreen.js
export const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen mode:", err);
      });
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen().catch((err) => {
        console.error("Error attempting to enable fullscreen mode:", err);
      });
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen mode:", err);
      });
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen mode:", err);
      });
    }
  };
  