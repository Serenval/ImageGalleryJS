export class Image {
  constructor(file) {
    this.id = this.generateID();
    this.name = file.name;
    this.category = file.category;
  }
  generateID() {
    return Date.now().toString(36);
  }
}