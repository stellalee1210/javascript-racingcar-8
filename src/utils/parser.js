import { UnknownError } from "../error/Errors.js";
import { Validator } from "./validator.js";

export const parseInputToArray = (rawCarNameInput) => {
  const validator = new Validator();
  const carNamesToArray = rawCarNameInput.split(",");
  if (validator.isParsedArrayValid(carNamesToArray))
    return carNamesToArray.map((v) => v.trim());
  throw new UnknownError();
};
