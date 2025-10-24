const DEFAULT_ERROR_MESSAGE = `[ERROR]`;
export const ERROR_MESSAGES = {
  CAR_NAME_EMPTY: `${DEFAULT_ERROR_MESSAGE} 자동차 이름이 중간에 비어있습니다.`,
  CAR_NAME_LENGTH: `${DEFAULT_ERROR_MESSAGE} 자동차 이름의 길이를 줄여주세요. (5글자 이내) `,
  DELIMITER: `${DEFAULT_ERROR_MESSAGE}  자동차 이름 구분자가 잘못 들어가있습니다.`,
  COUNT: `${DEFAULT_ERROR_MESSAGE} 입력된 게임 진행 횟수가 올바르지 않습니다. 숫자만 입력해주세요.`,
  COUNT_EMPTY: `${DEFAULT_ERROR_MESSAGE} 게임 진행 횟수가 입력되지 않았습니다.`,
  UNKNOWN: `${DEFAULT_ERROR_MESSAGE} 알 수 없는 에러입니다.`,
};
