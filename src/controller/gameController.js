import {
  getCarInput,
  getCountInput,
  printResultTitle,
  printProgress,
  printWinners,
} from "../view/io.js";
import { Validator } from "../utils/validator.js";
import { parseInputToArray } from "../utils/parser.js";
import { AppError } from "../error/AppError.js";
import { ERROR_MESSAGES } from "../constants/messages.js";
import { UnknownError } from "../error/Errors.js";
import { Car } from "../model/Car.js";
import { Game } from "../model/Game.js";

export const playGame = async () => {
  try {
    const carInput = await getCarInput();
    const countInput = await getCountInput();
    let carNames = carInput;

    const validator = new Validator();
    if (
      !validator.isEmpty(carInput, "car") &&
      !validator.isSinglePlay(carInput)
    ) {
      carNames = parseInputToArray(carInput);
    }

    if (
      !validator.isEmpty(countInput, "count") &&
      validator.isCountNumber(countInput)
    ) {
      //게임시작 호출
      startGame(carNames, countInput);
    }
  } catch (error) {
    if (error instanceof AppError) throw Error(error.message);
    throw new UnknownError(ERROR_MESSAGES.UNKNOWN);
  }
};

const startGame = (carList, count) => {
  const playerCars = initializeCars(carList);
  const game = new Game(playerCars);
  printResultTitle();

  for (let i = 0; i < count; i++) {
    game.makeMove();
    printProgress(playerCars);
  }

  const winners = game.getWinner();
  printWinners(winners);
};

const initializeCars = (carList) => {
  const cars = [];
  carList.forEach((carName) => {
    const car = new Car(carName);
    cars.push(car);
  });
  return cars;
};
