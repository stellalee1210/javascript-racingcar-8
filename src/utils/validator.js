import {
  CarNameEmptyError,
  CountEmptyError,
  CarNameLengthError,
  CountError,
  DelimiterError,
  UnknownError,
} from "../error/Errors.js";
import { ERROR_MESSAGES } from "../constants/messages.js";

export class Validator {
  #checkLengthPattern = "^.{1,5}$";
  #checkNamePattern = "^[a-zA-Z0-9.]{1,5}$";

  isCarInputEmpty(input) {
    if (input === undefined || input === null || input.length === 0)
      throw new CarNameEmptyError(ERROR_MESSAGES.CAR_NAME_EMPTY);
    return false;
  }

  isCountEmpty(input) {
    if (input === undefined || input === null || input.length === 0)
      throw new CountEmptyError(ERROR_MESSAGES.COUNT_EMPTY);
    if (this.#isCountNumber(input)) return false;
  }

  #isCountNumber(count) {
    if (isNaN(Number(count))) throw new CountError(ERROR_MESSAGES.COUNT);
    return true;
  }

  isMultiPlay(input) {
    if (input.includes(",")) return true;
    if (this.#checkNameLength(input) && this.#checkNameFormat(input))
      return false;
    throw new UnknownError(ERROR_MESSAGES.UNKNOWN);
  }

  #checkNameLength(input) {
    const regex = new RegExp(this.#checkLengthPattern);
    if (regex.test(input)) return true;
    throw new CarNameLengthError(ERROR_MESSAGES.CAR_NAME_LENGTH);
  }

  #checkNameFormat(input) {
    const regex = new RegExp(this.#checkNamePattern);
    if (regex.test(input)) return true;
    throw new DelimiterError(ERROR_MESSAGES.DELIMITER);
  }

  isParsedArrayValid(parsedArray) {
    for (const item of parsedArray) this.isCarInputEmpty(item.trim());

    if (this.#isNameValid(parsedArray)) return true;
  }

  isNameLengthValid(array) {
    const validLengthValues = array.filter((v) => this.#checkNameLength(v));
    if (validLengthValues.length === array.length) return true;

    throw new CarNameLengthError(ERROR_MESSAGES.CAR_NAME_LENGTH);
  }

  #isNameValid(array) {
    const validNameValues = array.filter((v) => this.#checkNameFormat(v));
    if (validNameValues.length === array.length) return true;

    throw new DelimiterError(ERROR_MESSAGES.DELIMITER);
  }
}
