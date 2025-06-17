import { Image } from "./image.js";

export class Gallery {
  constructor() {
    this.images = [];
    this.currentFilter = 'all';
    this.filteredImages = [];
    this.selectedIndex = 0;
    this.setImageList();
  }

  addImage(image) {
    this.images.push(image);
    return image;
  }

  navigateLeft() {
    let nextImageIndex = this.selectedIndex - 1;
    if (this.filteredImages.length != 0 && nextImageIndex >= 0 && nextImageIndex <= this.filteredImages.length - 1) {
      this.selectedIndex = nextImageIndex;
    }
  }

  navigateRight() {
    let nextImageIndex = this.selectedIndex + 1;
    if (this.filteredImages.length != 0 && nextImageIndex <= this.filteredImages.length - 1) {
      this.selectedIndex = nextImageIndex;
    }
  }

  setImageList() {
    const imageList = [
      new Image("nature-mountains.jpg", "nature"),
      new Image("nature-forest.jpg", "nature"),
      new Image("urban-cityscape.jpg", "urban"),
      new Image("urban-street.jpg", "urban"),
      new Image("abstract-art1.jpg", "abstract"),
      new Image("abstract-shapes.jpg", "abstract")
    ];

    this.images = imageList;
    this.filteredImages = [...imageList];
    return this.images;
  }

  getImageById(id) {
    return this.filteredImages.find(image => image.id === id);
  }

  getImageByIndex(index) {
    return this.filteredImages[index];
  }

  filterImages(option) {
    this.currentFilter = option;
    if (this.currentFilter == 'all') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(image => image.category === this.currentFilter);
    }
    return this.filteredImages;
  }
}