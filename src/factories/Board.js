export default class Board {
  constructor(size) {
    // Size of board grid
    this.size = size;

    /**
     * An array for storing the ships
     * Keep track its names and status (hit or sunk)
     */
    this.fleet = [];

    /**
     * Field status array
     * 0: empty, not hit
     * 1: empty, but hit
     * 2: not empty, not hit
     * 3: not empty, but hit
     */
    this.fieldStatus = [...Array(size)].map((x, j) => Array(size).fill(0));
  }

  /**
   * Get field status
   * @param {Number} x coordinate
   * @param {Number} y coordinate
   * @returns the status of x, y field
   */
  getFieldStatus(x, y) {
    return this.fieldStatus[x][y];
  }

  /**
   * Check if it's OK to place ship
   * @param {Object} theShip object
   * @returns true if ship can be placed, false if not
   */
  canPlaceShip(theShip) {
    [...theShip.coords].forEach((coord) => {
      const x = coord.getX();
      const y = coord.getY();

      if (x >= this.size || y >= this.size) return false;

      // If ship is already in this field
      if (this.fieldStatus[x][y] !== 0) return false;
    });

    return true;
  }

  /**
   * Places a ship on the board
   * @param {Object} theShip object
   */
  placeShip(theShip) {
    [...theShip.coords].forEach((coord) => {
      const x = coord.getX();
      const y = coord.getY();

      // If ship is already in this field
      if (this.fieldStatus[x][y] !== 0) {
        throw new Error("Field is already occupied");
      }

      // Set fields to not empty, not hit
      this.fieldStatus[x][y] = 2;
    });

    this.fleet.push(theShip);
  }

  /**
   * Check if it's OK to place shot
   * @param {Object} theCoord to hit
   * @returns true if OK to place shot, false if not
   */
  canPlaceShot(theCoord) {
    const x = theCoord.getX();
    const y = theCoord.getY();
    const field = this.fieldStatus[x][y];

    // If field value is 0 or 2, it's OK to shoot
    if (field === 0 || field === 2) return true;

    return false;
  }

  /**
   * Places shot on the board
   * @param {Object} theCoord to hit
   * @returns the result (1 or 3 - the two possible outcomes)
   */
  placeShot(theCoord) {
    const x = theCoord.getX();
    const y = theCoord.getY();

    if (this.fieldStatus[x][y] === 0) {
      this.fieldStatus[x][y] = 1;
      return this.fieldStatus[x][y];
    }

    if (this.fieldStatus[x][y] === 1 || this.fieldStatus[x][y] === 3) {
      throw new Error("Field has already been hit");
    }

    this.fieldStatus[x][y] = 3;

    // We have a successful shot, and the ship must remember that it has been hit
    this.fleet.forEach((ship) => {
      if (ship.hasCoordinates(theCoord)) ship.isHit(theCoord);
    });

    return this.fieldStatus[x][y];
  }

  /**
   * Gets the name of a ship if it was destroyed and remove it from fleet
   * This method must be called after every shot
   * @returns the name of the ship that has been destroyed (if hasSunk return true),
   * Or an empty string is ship was not destroyed
   */
  getFleetStatus() {
    const destroyedShip = this.fleet.find((ship) => ship.hasSunk());
    const index = this.fleet.indexOf(destroyedShip);

    if (index > -1) this.fleet.splice(index, 1);

    return destroyedShip === undefined ? "" : destroyedShip.getName();
  }
}
