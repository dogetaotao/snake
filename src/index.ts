import './style/index.less'
import GameControl from "./modules/GameControl";

const gameControl = new GameControl()
gameControl.food.change()
gameControl.run()