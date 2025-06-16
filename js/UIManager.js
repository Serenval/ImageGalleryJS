export class UIManager {
  constructor(gallery) {
    this.gallery = gallery;
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.galleryElement = document.getElementById('gallery');
    this.modal = document.getElementById('modalContainer');
    this.modalImage = document.getElementById('modalImage');
    this.modalClose = document.getElementById('modalClose');
    this.bindEvents();
  };

  bindEvents() {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e)=> {
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.gallery.filterImages(e.target.dataset.filter);
        this.render();
      });
    });
    
    this.modalClose.addEventListener('click', () => {
      this.closeModal();
    });

    //When using regular function declarations in event listeners, this loses its context.
    // That's why we need to use only arrow functions to access 'this'
    this.galleryElement.addEventListener('click', (event) => {
      const galleryItem = event.target.closest('.gallery-item');
      if (galleryItem) {
        const imageId = galleryItem.dataset.imageId;
        console.log(this.gallery.images.length);
        const image = this.gallery.getImageById(imageId);
        if (image) {
          this.openModal(image);
          console.log(image.id);
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

  openModal(image) {
    this.modalImage.src = `/images/${image.name}`;
    this.modalImage.alt = image.name.split('.')[0];
    this.modal.classList.add('show');
  }

  closeModal() {
    this.modal.classList.remove('show');
    this.modalImage.src = '';
    this.modalImage.alt = '';
  }
}