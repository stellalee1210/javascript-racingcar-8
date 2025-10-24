import { DelimiterError } from "../error/Errors.js";
import { ERROR_MESSAGES } from "../constants/messages.js";

export const parseInputToArray = (rawCarNameInput) => {
  try {
    const carNames = rawCarNameInput.split(",");
    return carNames.map((v) => v.trim());
  } catch (error) {
    throw new DelimiterError(ERROR_MESSAGES.DelimiterError);
  }
};
