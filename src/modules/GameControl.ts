import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
	snake: Snake
	food: Food
	scorePanel: ScorePanel
	
	direction = "ArrowRight"
	isLive: boolean = true
	
	constructor() {
		this.snake = new Snake()
		this.food = new Food()
		this.scorePanel = new ScorePanel(10, 5)
		
		this.init()
	}
	
	//调用后游戏开始
	init() {
		//绑定键盘按下事件
		document.addEventListener('keydown', this.keydownHandler.bind(this))
	}
	
	keydownHandler(event: KeyboardEvent) {
		this.direction = event.key
	}
	
	
	run() {
		let X = this.snake.X
		let Y = this.snake.Y
		
		switch (this.direction) {
			case "ArrowUp" :
				Y -= 10
				break
			case "ArrowDown" :
				Y += 10
				break
			case "ArrowLeft" :
				X -= 10
				break
			case "ArrowRight" :
				X += 10
				break
		}
		
		if (this.checkEat(X, Y)) {
			setTimeout(() => {
				this.food.change()
			}, 100)
			this.scorePanel.addScore()
			this.snake.addBody()
		}
		
		
		try {
			this.snake.X = X
			this.snake.Y = Y
		} catch (e: any) {
			alert(e.message)
			this.isLive = false
		}
		this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
	}
	
	
	checkEat(X: number, Y: number) {
		return X === this.food.X && Y === this.food.Y
	}
}