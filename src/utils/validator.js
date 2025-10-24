export class Validator {
  isEmpty(input) {
    if (input.length === 0) throw Error("[ERROR] 칸이 비어있습니다.");
    return false;
  }
}
