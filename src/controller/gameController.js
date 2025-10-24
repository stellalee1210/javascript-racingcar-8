import { getCarInput, getCountInput, print } from "../view/io.js";
import { Validator } from "../utils/validator.js";
import { parseInputToArray } from "../utils/parser.js";
export const playGame = async () => {
  try {
    const carInput = await getCarInput();
    const countInput = await getCountInput();
    let carNames = carInput;

    const validator = new Validator();
    if (!validator.isEmpty(carInput) && !validator.isSinglePlay(carInput)) {
      carNames = parseInputToArray(carInput);
    }

    if (validator.isCountNumber(countInput)) {
      //게임시작 호출
    }
  } catch (error) {
    print(error);
  }
};
