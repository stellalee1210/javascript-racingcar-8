import { getCarInput, getCountInput } from "../view/io.js";
import { Validator } from "../utils/validator.js";
import { parseInputToArray } from "../utils/parser.js";
import { AppError } from "../error/AppError.js";
import { ERROR_MESSAGES } from "../constants/messages.js";
import { UnknownError } from "../error/Errors.js";
import { Game } from "../model/Game.js";

export const playGame = async () => {
  try {
    const carInput = await getCarInput();
    const countInput = await getCountInput();

    const validator = new Validator();
    validator.isCarInputEmpty(carInput);
    validator.isCountEmpty(countInput);

    const game = new Game();
    if (validator.isMultiPlay(carInput)) {
      const parsedInput = parseInputToArray(carInput);
      game.startGame(parsedInput, countInput);
    } else {
      game.startGame(carInput, countInput);
    }
  } catch (error) {
    if (error instanceof AppError) throw new Error(error.message);
    throw new UnknownError(ERROR_MESSAGES.UNKNOWN);
  }
};
