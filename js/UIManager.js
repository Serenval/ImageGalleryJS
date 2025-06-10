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
    this.galleryElement.innerHTML = '';

    this.gallery.filteredImages.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.dataset.category = image.category;
      galleryItem.dataset.imageId = image.id;

      const img = document.createElement('img');
      img.src = `/images/${image.name}`;
      img.alt = image.name.split('.')[0];

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.textContent = 'View';

      galleryItem.appendChild(img);
      galleryItem.appendChild(overlay);
      this.galleryElement.appendChild(galleryItem);
    });
  };
}