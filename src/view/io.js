import { Console } from "@woowacourse/mission-utils";

const CAR_NAME_INPUT_MESSAGE = "경주할 자동차 이름을 입력하세요\n";
const COUNT_INPUT_MESSAGE = "시도할 횟수는 몇 회인가요?\n";

export const getCarInput = async () =>
  await Console.readLineAsync(CAR_NAME_INPUT_MESSAGE);
export const getCountInput = async () =>
  await Console.readLineAsync(COUNT_INPUT_MESSAGE);

export const print = (message) => {
  Console.print(message);
};
