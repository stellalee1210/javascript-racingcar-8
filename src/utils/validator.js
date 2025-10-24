import {
  CarNameEmptyError,
  CountEmptyError,
  CarNameLengthError,
  CountError,
} from "../error/Errors.js";
import { ERROR_MESSAGES } from "../constants/messages.js";

export class Validator {
  isEmpty(input, inputType = "") {
    if (input.length === 0 && inputType === "car")
      throw new CarNameEmptyError(ERROR_MESSAGES.CAR_NAME_EMPTY);
    if (input.length === 0 && inputType === "count")
      throw new CountEmptyError(ERROR_MESSAGES.COUNT_EMPTY);

    return false;
  }

  isSinglePlay(input) {
    if (input.includes(",")) return false;
    return true;
  }

  isCarNameUnderLimit(carName) {
    if (carName.length > 5)
      throw new CarNameLengthError(ERROR_MESSAGES.CAR_NAME_LENGTH);
    return true;
  }

  isCountNumber(count) {
    if (isNaN(Number(count))) throw new CountError(ERROR_MESSAGES.DELIMITER);
    return true;
  }
}
