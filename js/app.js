import { Gallery } from "./gallery.js";
import { UIManager } from "./UIManager.js";

class ImageGalleryApp {
  constructor() {
    this.gallery = null;
    this.uiManager = null;

    this.init();
  }

  init() {
    console.log('initialization');
    this.gallery = new Gallery();
    this.uiManager = new UIManager(this.gallery);
    this.uiManager.render();
  }

}

document.addEventListener('DOMContentLoaded', function() {
  window.ImageGalleryApp = new ImageGalleryApp();

});