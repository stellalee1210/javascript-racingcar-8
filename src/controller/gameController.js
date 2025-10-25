import { getCarInput, getCountInput } from "../view/io.js";
import { Validator } from "../utils/Validator.js";
import { parseInputToArray } from "../utils/parser.js";
import { AppError } from "../error/AppError.js";
import { ERROR_MESSAGES } from "../constants/messages.js";
import { UnknownError } from "../error/Errors.js";
import { Car } from "../model/Car.js";
import { Console } from "@woowacourse/mission-utils";

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
      Console.print("start");
      startGame(carNames);
    }
  } catch (error) {
    if (error instanceof AppError) throw Error(error.message);
    throw new UnknownError(ERROR_MESSAGES.UNKNOWN);
  }
};

const startGame = (carNames) => {
  const playerCars = initializeCars(carNames);
};

const initializeCars = (carNames) => {
  const cars = [];
  carNames.forEach((carName) => {
    const car = new Car(carName);
    cars.push(car);
  });
  return cars;
};
