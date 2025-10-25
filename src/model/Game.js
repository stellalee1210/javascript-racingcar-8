import { Random } from "@woowacourse/mission-utils";

export class Game {
  #carList;
  #winner;
  constructor(carList) {
    this.#carList = carList;
    this.#winner = [];
  }

  makeMove() {
    this.#carList.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) this.#saveMove(car);
    });
  }

  #saveMove(car) {
    car.addMove();
  }

  getWinner() {
    let maxCount = 0;
    this.#carList.forEach((car) => {
      const moveCount = car.getMoveCount();
      const carName = car.getCarName();
      if (moveCount === maxCount) {
        this.#winner.push(carName);
      } else if (moveCount > maxCount) {
        maxCount = moveCount;
        this.#winner = [carName];
      }
    });
    return this.#winner;
  }
}
