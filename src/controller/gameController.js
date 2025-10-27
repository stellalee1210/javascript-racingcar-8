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

    const validator = new Validator();
    validator.isCarInputEmpty(carInput);
    validator.isCountEmpty(countInput);

    if (validator.isMultiPlay(carInput)) {
      const parsedInput = parseInputToArray(carInput);
      startGame(parsedInput, countInput);
    } else {
      startGame(carInput, countInput);
    }

    //게임시작 호출
  } catch (error) {
    if (error instanceof AppError) throw new Error(error.message);
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
  for (const carName of carList) {
    const car = new Car(carName);
    cars.push(car);
  }
  return cars;
};
