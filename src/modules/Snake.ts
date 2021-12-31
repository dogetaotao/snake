export default class Snake {
	//获取蛇头
	head: HTMLElement
	//获取蛇身加蛇头
	bodies: HTMLCollection
	//获取蛇的容器
	element: HTMLElement
	
	constructor() {
		this.head = document.querySelector('#snake > div')!
		this.element = document.getElementById("snake")!
		this.bodies = this.element.getElementsByTagName('div')!
	}
	
	get X() {
		return this.head.offsetLeft
	}
	
	get Y() {
		return this.head.offsetTop
	}
	
	set X(value: number) {
		
		this.checkHeadBody()
		if (this.X === value) {
			return
		}
		if (value < 0 || value > 290) {
			throw new Error("🐍撞墙了")
		}
		
		//蛇不能掉头
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
			if (value > this.X) {
				//修正坐标，防止掉头
				value = this.X - 10
			} else {
				value = this.X + 10
			}
		}
		
		this.moveBody()
		this.head.style.left = value + "px"
	}
	
	set Y(value) {
		
		this.checkHeadBody()
		if (this.Y === value) {
			return
		}
		if (value < 0 || value > 290) {
			throw new Error("🐍撞墙了")
		}
		
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
			if (value > this.Y) {
				//修正坐标，防止掉头
				value = this.Y - 10
			} else {
				value = this.Y + 10
			}
		}
		
		this.moveBody()
		this.head.style.top = value + "px"
	}
	
	checkHeadBody() {
		for (let i = 1; i < this.bodies.length; i++) {
			let bd = this.bodies[i] as HTMLElement
			if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
				throw new Error("蛇撞到自己了")
			}
		}
	}
	
	addBody() {
		this.element.insertAdjacentHTML("beforeend", "<div></div>")
	}
	
	moveBody() {
		for (let i = this.bodies.length - 1; i > 0; i--) {
			let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
			let Y = (this.bodies[i - 1] as HTMLElement).offsetTop
			
			;(this.bodies[i] as HTMLElement).style.left = X + "px"
			;(this.bodies[i] as HTMLElement).style.top = Y + "px"
			
		}
	}
}