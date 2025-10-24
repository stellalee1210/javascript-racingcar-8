# README.md

## 자동차 경주

자동차 경주 게임은 자동차 이름을 입력 받고 이동할 횟수를 입력하여 이동 횟수만큼 각 자동차의 전진 횟수를 랜덤하게 구한 뒤 가장 많이 전진한 자동차를 우승자로써 출력하는 프로그램입니다.

## 구현 기능 목록

### Controller

- [x] gameController: 게임 진행하는 메인 파일
- [ ] startGame : 게임 시작
  - [ ] initializeGame() : 자동차 이름 별로 Car class 선언
  - [ ] printWinner() : game class에서 getWinner을 통해 우승자 정보를 받아서 view/printResult로 넘김
  - [ ] Game class 선언하여 해당 게임의 자동차 이름 저장

### View

- [x] 입력 : Console에서 사용자가 입력한 자동차 이름들과 게임 진행 횟수를 받음
  - [x] getCarInput
  - [x] getCountInput
- [x] 출력: 진행한 게임 결과를 형식에 맞게 Console에 출력

### Utils

- [ ] parser : 입력한 자동차 이름을 `,` 기준으로 구분
- [x] validator : 유효한 값인지 검증
  - [x] isEmpty() : 입력된 문자열 공백 확인
  - [ ] isCarNameValid() : 입력된 자동차 이름이 유효한지 true/false 반환
    - [ ] isCarNameUnderLimit() : 자동차 이름이 5글자 이내인지 확인
  - [ ] isCountNumber() : 입력된 횟수가 숫자인지 검증

### Constants

- [ ] contants : 상수 저장
  - [ ] Error Message
    - [ ] [ERROR] 자동차 이름이 입력되지 않았습니다.
    - [ ] [ERROR] 자동차 이름이 중간에 비어있습니다.
    - [ ] [ERROR] 자동차 이름의 길이를 줄여주세요. (5글자 이내)
    - [ ] [ERROR] 자동차 이름 구분자가 잘못 들어가있습니다. ( 자동차 이름 구분자 ‘,’ )
    - [ ] [ERROR] 입력된 게임 진행 횟수가 올바르지 않습니다. 숫자만 입력해주세요

### Models

- [ ] class Car
  - [ ] carName: 자동차 이름
  - [ ] moves: 이동 횟수
  - [ ] getMoveCount : 움직인 횟수 리턴
  - [ ] addMove: 움직인 횟수 +1
- [ ] class Game
  - [ ] carList: 자동차 이름 배열
  - [ ] winner: 게임 우승자 이름
  - [ ] makeMove: 랜덤으로 숫자 뽑는 로직을 통해 전진 여부 결정
  - [ ] saveMove: Car class에 전진한 차 정보 저장
  - [ ] getWinner: 우승자 이름 반환

### 주의할 점

- [ ] 자동차 이름 5글자 이하
- [ ] depth 2 이하로 유지
- [ ] 상수와 일반 변수 네이밍 차이 조심
  - [ ] 상수 : SNAKE_CASE
  - [ ] 일반 변수 : camelCase
- [ ] 출력 함수 대신 디버거 사용
- [ ] commit message 남기기 전에 전반적인 코드 확인하기
- [ ] commit message에 scope 추가하기

### Errors

- [ ] 에러의 Base가 되는 appError class

### GameError

- [ ] 해당 class를 상속하는 여러 종류의 Error 생성
  - [ ] CarNameEmptyError
  - [ ] CarNameLengthError
  - [ ] DelimiterError
  - [ ] CountError
  - [ ] CountEmptryError

## 프로젝트 구조

```markdown
/racing-car-game
├── src/
│ ├── constants/
│ │ └── messages.js # [신규] 모든 에러 메시지 및 상수
│ │
│ ├── errors/
│ │ ├── appError.js # [신규] Base가 되는 부모 에러
│ │ └── gameErrors.js # [신규] ValidationError 등 커스텀 에러 모음
│ │
│ ├── models/
│ │ ├── car.js # [유지] Car 클래스
│ │ └── game.js # [유지] Game 클래스
│ │
│ ├── view/
│ │ └── io.js # [유지]
│ │
│ ├── controller/
│ │ └── gameController.js # [유지]
│ │
│ ├── utils/
│ │ ├── parser.js # [이동] 모델이 아닌 유틸리티
│ │ └── validator.js # [이동] 모델이 아닌 유틸리티
│ │
│ └── App.js # [유지] 프로그램 시작
│
└── package.json
```

## 설계

<img width="5510" height="5728" alt="week2_mermaid_diagram" src="https://github.com/user-attachments/assets/b3d3960a-1a9f-46a8-a95c-329b802f9bbc" />

## Tests

ApplicationTest : 통합 테스트

- [ ] 기본 테스트 1: 정상 작동
- [ ] 기본 테스트 2: 횟수 미입력 오류
- [ ] 추가 테스트 1 : 자동차 이름 중간에 빈 이름 입력 → 오류 출력 : `[ERROR] 자동차 이름이 중간에 비어있습니다`
- [ ] 추가 테스트 2 : 자동차 이름 구분자(,) 아닌 기호 입력 → 오류 출력 : `[ERROR] 자동차 이름 구분자가 잘못 들어가있습니다.`
- [ ] 추가 테스트 3 : 게임 진행 횟수에 문자 입력 → 오류 출력 : `[ERROR] 입력된 게임 진행 횟수가 올바르지 않습니다. 숫자만 입력해주세요`
- [ ] 추가 테스트 4 : 자동차 이름 5글자 이상 입력 → 오류 출력 : `[ERROR] 자동차 이름의 길이를 줄여주세요. (5글자 이내)`
