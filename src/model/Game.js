import { Random } from "@woowacourse/mission-utils";
import { printResultTitle, printProgress, printWinners } from "../view/io.js";
import { Car } from "./Car.js";

export class Game {
  #carList;
  #winner;
  #count;
  constructor() {
    this.#carList = [];
    this.#winner = [];
    this.#count = 0;
  }

  startGame(carList, count) {
    this.#count = count;
    this.#initializeCars(carList);
    printResultTitle();

    for (let i = 0; i < this.#count; i++) {
      this.#makeMove();
      printProgress(this.#carList);
    }
    this.#getWinner();
  }

  #initializeCars(carList) {
    for (const carName of carList) {
      const car = new Car(carName);
      this.#carList.push(car);
    }
  }

  #makeMove() {
    this.#carList.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) this.#saveMove(car);
    });
  }

  #saveMove(car) {
    car.addMove();
  }

  #getWinner() {
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
    printWinners(this.#winner);
  }
}
