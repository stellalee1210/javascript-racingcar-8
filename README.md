# README.md

## 자동차 경주

자동차 경주 게임은 자동차 이름을 입력 받고 이동할 횟수를 입력하여 이동 횟수만큼 각 자동차의 전진 횟수를 랜덤하게 구한 뒤 가장 많이 전진한 자동차를 우승자로써 출력하는 프로그램입니다.

## 구현 기능 목록

### Controller

- [x] gameController: 게임 진행하는 파일 생성

### View

- [x] 입력 : Console에서 사용자가 입력한 자동차 이름들과 게임 진행 횟수를 받음
  - [x] getCarInput
  - [x] getCountInput
- [ ] 출력: 진행한 게임 결과를 형식에 맞게 Console에 출력

### Model

- [ ] parser : 입력한 자동차 이름을 `,` 기준으로 구분
- [ ] validator : 유효한 값인지 검증
  - [ ] isCarNameValid() : 입력된 자동차 이름이 유효한지 true/false 반환
    - [ ] isCarNameEmpty() : 자동차 이름 공백 확인
    - [ ] isCarNameUnderLimit() : 자동차 이름이 5글자 이내인지 확인
  - [ ] isCountNumber() : 입력된 횟수가 숫자인지 검증
- [ ] startGame : 게임 시작
  - [ ] initializeGame() : 자동차 이름 별로 Car class 선언
  - [ ] printWinner() : game class에서 getWinner을 통해 우승자 정보를 받아서 view/printResult로 넘김
  - [ ] Game class 선언하여 해당 게임의 자동차 이름 저장

### Constants

- [ ] contants : 상수 저장
  - [ ] Error Message
    - [ ] [ERROR] 자동차 이름이 입력되지 않았습니다.
    - [ ] [ERROR] 자동차 이름이 중간에 비어있습니다.
    - [ ] [ERROR] 자동차 이름의 길이를 줄여주세요. (5글자 이내)
    - [ ] [ERROR] 자동차 이름 구분자가 잘못 들어가있습니다. ( 자동차 이름 구분자 ‘,’ )
    - [ ] [ERROR] 입력된 게임 진행 횟수가 올바르지 않습니다. 숫자만 입력해주세요
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

## 프로젝트 구조

```markdown
/racing-car-game
├── src/
│ ├── constants/
│ │ ├── errorMessages.js # 상수 (에러 메시지 등)
| | ├── car.js # Car 클래스
│ │ └── game.js # Game 클래스 (게임의 핵심 로직)
│ │
│ ├── models/
│ │ ├── parser.js # [Model] parser
│ │ ├── validator.js # [Model] validator (모든 유효성 검증)
| | └── startGame.js
│ │  
│ │
│ ├── view/
│ │ ├── inputView.js # [View] getInput
│ │ └── outputView.js # [View] printResult
│ │
│ ├── controller/
│ │ └── gameController.js # [Controller] playGame
│ │
│ │
│ └── App.js # 프로그램 전체 시작 파일
│
└── package.json
```

## 설계

<img width="5510" height="5728" alt="week2_mermaid_diagram" src="https://github.com/user-attachments/assets/b3d3960a-1a9f-46a8-a95c-329b802f9bbc" />

## Tests

UnitTest : 단위 테스트

- [ ] parser
  - [ ] 입력 값 : 자동차 이름 문자열 ( ex. ’Thomas, Micheal, Lucas’ )
  - [ ] 출력 값 : 자동차 이름 배열 (ex. [’Thomas’, ‘Micheal’, ’Lucas’]
- [ ] validator
  - [ ] isEmpty
    - [ ] 입력 값 : 배열 / 조건 : 배열이 비었는지 확인
    - [ ] 출력 값 : true / false
  - [ ] isCarNameUnderLimit
    - [ ] 입력 값 : 문자열 / 조건 : lengh 5 이하
    - [ ] 출력 값 : true / false
  - [ ] isCountNumber
    - [ ] 입력 값 : 숫자 / 조건 : 입력 값이 숫자인지 확인
    - [ ] 출력 값 : true / false
- [ ] car
  - [ ] getMoveCount : 해당 차량이 움직인 횟수 return
  - [ ] addMove : 해당 차량의 이동 횟수 + 1
- [ ] game
  - [ ] playTurn : 랜덤으로 숫자 뽑고 4 이상이면 true, 아닐 시 false return
  - [ ] getWinner : 참여하고 있는 자동차들 중 가장 많이 움직인 자동차를 찾아 return

ApplicationTest : 통합 테스트

- [ ] 기본 테스트 1: 정상 작동
- [ ] 기본 테스트 2: 횟수 미입력 오류
- [ ] 추가 테스트 1 : 자동차 이름 중간에 빈 이름 입력 → 오류 출력 : `[ERROR] 자동차 이름이 중간에 비어있습니다`
- [ ] 추가 테스트 2 : 자동차 이름 구분자(,) 아닌 기호 입력 → 오류 출력 : `[ERROR] 자동차 이름 구분자가 잘못 들어가있습니다.`
- [ ] 추가 테스트 3 : 게임 진행 횟수에 문자 입력 → 오류 출력 : `[ERROR] 입력된 게임 진행 횟수가 올바르지 않습니다. 숫자만 입력해주세요`
- [ ] 추가 테스트 4 : 자동차 이름 5글자 이상 입력 → 오류 출력 : `[ERROR] 자동차 이름의 길이를 줄여주세요. (5글자 이내)`
