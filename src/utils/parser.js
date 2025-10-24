export const parseInputToArray = (rawCarNameInput) => {
  try {
    const carNames = rawCarNameInput.split(",");
    return carNames.map((v) => v.trim());
  } catch (error) {
    throw Error("[ERROR] 자동차 이름 구분자가 잘못 들어가있습니다.");
  }
};
