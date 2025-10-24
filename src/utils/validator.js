export class Validator {
  isEmpty(input) {
    if (input.length === 0) throw Error("[ERROR] 칸이 비어있습니다.");
    return false;
  }

  isCarNameUnderLimit(carName) {
    if (carName.length > 5)
      throw Error(
        `[ERROR] 자동차 이름 '${carName}'이(가) 제한 글자 수를 넘어섰습니다. (제한 글자 수 : 5글자)`
      );
    return true;
  }

  isCountNumber(count) {
    if (isNaN(Number(count)))
      throw Error(
        "[ERROR] 입력하신 게임 진행 횟수는 숫자가 아닙니다. 숫자로 다시 입력해주세요."
      );
    return true;
  }
}
