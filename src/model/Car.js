export class Car {
  #carName;
  #moves;

  constructor(carName) {
    this.#carName = carName;
    this.#moves = 0;
  }
  getMoveCount() {
    return this.#moves;
  }

  addMove() {
    this.#moves += 1;
  }
}
