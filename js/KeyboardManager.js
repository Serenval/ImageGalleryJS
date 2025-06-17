export class KeyboardManager {
  constructor(uiManager) {
    this.isModalOpen = false;
    this.uiManager = uiManager;
    this.gallery = uiManager.gallery;
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('keydown', (e) => {
      this.isModalOpen = this.uiManager.modal.classList.contains('show');
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
    if (this.isModalOpen) {
      this.gallery.navigateLeft();
      const image = this.gallery.getImageByIndex(this.gallery.selectedIndex);
      this.uiManager.openModal(image);
    }
  }

  navigateRight() {
    if (this.isModalOpen) {
      this.gallery.navigateRight();
      const image = this.gallery.getImageByIndex(this.gallery.selectedIndex);
      this.uiManager.openModal(image);
    }
  }
}