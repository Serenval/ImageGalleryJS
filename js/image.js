export class Image {
  constructor(name, category) {
    this.id = this.generateID();
    this.name = name;
    this.category = category;
  }
  generateID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}