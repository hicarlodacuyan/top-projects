export default class Ship {
  /**
   * Construct a ship of given coords and name
   * @param {Array} coords
   * @param {String} name
   */
  constructor(coords, name) {
    this.coords = [...coords];
    this.name = name;
  }

  /**
   * Registers that the ship has been hit
   * @param {Object} theCoord
   */
  shipHit(theCoord) {
    this.coords.forEach((coord, index) => {
      if (coord.equals(theCoord)) {
        this.coords.splice(index, 1);
      }
    });
  }

  /**
   * Checks if there are any parts left of this ship
   * @returns true if there are no more coordinates - hence the ship is destroyed
   */
  noMoreShip() {
    return this.coords.length === 0;
  }

  /**
   * Tests whether this ship is placed on these coordinates
   * @param {Object} theCoord to test
   * @returns true if ship is on these coordinates, false if not
   */
  hasCoordinates(theCoord) {
    return this.coords.some((coord) => {
      return coord.equals(theCoord);
    });
  }
}
