export class KeyboardManager {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.gallery = uiManager.gallery;
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.navigateLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.navigateRight();
          break;
      }
    });
  }

  navigateLeft() {
    if (this.uiManager.isModalOpen()) {
      this.gallery.navigateLeft();
      const image = this.gallery.getImageByIndex(this.gallery.selectedIndex);
      this.uiManager.openModal(image);
    }
  }

  navigateRight() {
    if (this.uiManager.isModalOpen()) {
      this.gallery.navigateRight();
      const image = this.gallery.getImageByIndex(this.gallery.selectedIndex);
      this.uiManager.openModal(image);
    }
  }
}