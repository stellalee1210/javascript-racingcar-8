import { playGame } from "./controller/gameController.js";
class App {
  async run() {
    await playGame(); //게임 시작
  }
}

export default App;
