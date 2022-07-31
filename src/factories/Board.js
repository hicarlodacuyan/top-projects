export default class Board {
    constructor(size) {
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
        this.fieldStatus = 
            [...Array(size)].map((x, j) => 
                Array(size).fill(0));
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
}