export class UIManager {
  constructor(gallery) {
    this.gallery = gallery;
    this.galleryElement = document.getElementById('gallery');
    this.modal = document.getElementById('modalContainer');
    this.modalImage = document.getElementById('modalImage');
    this.modalClose = document.getElementById('modalClose');
    this.bindEvents();
  };

  bindEvents() {
    this.modalClose.addEventListener('click', function() {
      this.modalClose();
    });

    this.galleryElement.addEventListener('click', function(event) {
      const galleryItem = event.target.closest('gallery-item');
      if (galleryItem) {
        const imageId = galleryItem.dataset.imageId;
        const image = this.gallery.getImageById(imageId);
        if (image) {
          this.openModal(image);
        }
      }
    });
  };

  render() {

  };
}