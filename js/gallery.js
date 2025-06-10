import { Image } from "./image.js";

export class Gallery {
  constructor() {
    this.images = [];
    this.filteredImages = [];
    this.selectedIndex = 0;
    this.setImageList();
  }

  addImage(image) {
    this.images.push(image);
    return image;
  }

  selectNext() {
    const nextImage = this.selectedIndex + 1;
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
    return this.images.find(image => image.id === id);
  }
}