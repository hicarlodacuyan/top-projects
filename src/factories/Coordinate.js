export default class Coordinate {
  /**
   * Constructs a coordinate set
   * @param {Number} x
   * @param {Number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Get value of x coordinate
   * @returns the x value of this coordinate
   */
  getX() {
    return this.x;
  }

  /**
   * Get value of y coordinate
   * @returns the y value of this coordinate
   */
  getY() {
    return this.y;
  }

  /**
   * Test this coordinate for equality with the Ship's coordinate
   * @param {Object} coord to test
   * @returns true or false
   */
  equals(coord) {
    if (this.x === coord.getX() && this.y === coord.getY()) return true;

    return false;
  }
}
