export default class ScorePanel {
	score = 0
	level = 1
	scoreEle: HTMLElement
	levelEle: HTMLElement
	maxLevel: number
	upScore: number
	
	constructor(maxLevel: number, upScore: number) {
		this.scoreEle = document.getElementById("curScore")!
		this.levelEle = document.getElementById("level")!
		this.maxLevel = maxLevel
		this.upScore = upScore
	}
	
	//设置一个增加分数的方法
	addScore() {
		this.score++
		this.scoreEle.innerHTML = this.score + ""
		if (this.score % this.upScore === 0) {
			this.levelUp()
		}
	}
	
	levelUp() {
		this.level++
		if (this.level < this.maxLevel) {
			this.levelEle.innerHTML = this.level + ""
		}
	}
}

