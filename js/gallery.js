import { Image } from "./image.js";

export class Gallery {
  constructor() {
    this.images = [];
    this.filteredImages = [];
    this.selectedIndex = 0;
  }

  addImage(file) {
    const image = new Image(file);
    this.images.push(image);
    this.applyFilter();
    return image;
  }

  selectNext() {
    const nextImage = this.selectedIndex + 1;
  }
}