export default class BoardState {
  /**
   * @param {array} players
   * @param {array} tiles
   */
  constructor(players, tiles) {
    this.players = players;
    this.tiles = tiles;
    this.state = {
      winner: null,
      type: null,
    };

    this.resolve();
  }

  resolve() {
    const resultOnXAxis = this.checkXAxis();
    const resultOnYAxis = this.checkYAxis();
    const resultOnDiagonals = this.checkDiagonals();
    const winner =
      resultOnXAxis || resultOnYAxis || resultOnDiagonals;

    if (this.isBoardFull() && !winner) {
      this.state.type = 'draw';
      this.state.winner = null;
    }

    this.state.type = 'match';
    this.state.winner = winner;
  }

  /**
   * @returns {boolean}
   */
  isBoardFull() {
    let full = true;

    this.tiles.forEach((tile) => {
      if (!tile.value) {
        full = false;
      }
    });

    return full;
  }

  /**
   * @returns {string|null}
   */
  checkXAxis() {
    let result = null;

    [
      [this.tiles[0], this.tiles[1], this.tiles[2]],
      [this.tiles[3], this.tiles[4], this.tiles[5]],
      [this.tiles[6], this.tiles[7], this.tiles[8]],
    ].forEach((row) => {
      const winner = BoardState.checkAxis(row);

      if (winner) {
        result = winner;
      }
    });

    return result;
  }

  /**
   * @returns {string|null}
   */
  checkYAxis() {
    let result = null;

    [
      [this.tiles[0], this.tiles[3], this.tiles[6]],
      [this.tiles[1], this.tiles[4], this.tiles[7]],
      [this.tiles[2], this.tiles[5], this.tiles[8]],
    ].forEach((column) => {
      const winner = BoardState.checkAxis(column);

      if (winner) {
        result = winner;
      }
    });

    return result;
  }

  /**
   * @returns {string|null}
   */
  checkDiagonals() {
    let result = null;

    [
      [this.tiles[0], this.tiles[4], this.tiles[8]],
      [this.tiles[6], this.tiles[4], this.tiles[2]],
    ].forEach((diagonal) => {
      const winner = BoardState.checkAxis(diagonal);

      if (winner) {
        result = winner;
      }
    });

    return result;
  }

  /**
   * @param {array} axis
   * @returns {string|null}
   */
  static checkAxis(axis) {
    if (axis[0].value === axis[1].value && axis[1].value === axis[2].value &&
      axis[0].value) {
      return axis[0].value;
    }

    return null;
  }

  /**
   * @returns {string|null}
   */
  getWinnerIdentifier() {
    return this.state.winner;
  }

  /**
   * @returns {{identifier: string, name: string}|null}
   */
  getWinner() {
    return this.players.filter(player => player.identifier === this.getWinnerIdentifier())[0];
  }

  /**
   * @returns {boolean}
   */
  isDraw() {
    return !this.getWinnerIdentifier();
  }
}
