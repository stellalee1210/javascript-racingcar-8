import { getCarInput, getCountInput, print } from "../view/io.js";
import { Validator } from "../utils/validator.js";
export const playGame = async () => {
  try {
    const carInput = await getCarInput();
    const countInput = await getCountInput();

    const validator = new Validator();
    if (validator.isEmpty(carInput)) {
      //parse 기능
    }
  } catch (error) {
    print(error);
  }
};
