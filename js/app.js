import { Gallery } from "./gallery.js";
import { UIManager } from "./UIManager.js";
import { KeyboardManager } from "./KeyboardManager.js";
class ImageGalleryApp {
  constructor() {
    this.gallery = null;
    this.uiManager = null;
    this.keyboardManager = null;

    this.init();
  }

  init() {
    console.log('initialization');
    this.gallery = new Gallery();
    this.uiManager = new UIManager(this.gallery);
    this.keyboardManager = new KeyboardManager(this.uiManager);
    this.uiManager.render();
  }

}

document.addEventListener('DOMContentLoaded', function() {
  window.ImageGalleryApp = new ImageGalleryApp();

});