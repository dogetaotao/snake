export default class Food {
	//定义属性代表食物对应属性
	private element: HTMLElement
	
	constructor() {
		//获取页面中food元素
		this.element = document.getElementById('food')!
	}
	
	//定义一个获取食物X轴坐标的方法
	get X() {
		return this.element.offsetLeft
	}
	
	get Y() {
		return this.element.offsetTop
	}
	
	change() {
		//生成一个随机的位置
		//食物的位置最小为0， 最大是290
		//蛇移动一次就是一格，10px
		let top = Math.round(Math.random() * 29) * 10
		let left = Math.round(Math.random() * 29) * 10
		this.element.style.left = left + 'px'
		this.element.style.top = top + 'px'
	}
}
