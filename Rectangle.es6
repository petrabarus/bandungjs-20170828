class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set height(value) {
      if (typeof value !== 'number') {
        throw new Error('"height" must be a number.');
      }

      this._height = value;
    }

    get width() {
      return this._width;
    }

    set width(value) {
      if (typeof value !== 'number') {
        throw new Error('"width" must be a number.');
      }

      this._width = value;
    }

    get area() {
        return this.width * this.height;
    }
}
module.exports = Rectangle;
