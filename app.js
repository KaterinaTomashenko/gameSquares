const board = document.querySelector('#board')
const SQUARES_NUMBER = 600
const colors =['#3fe22b', '#f0b91f', '#3d73dd', '#44dba5', '#61f000m', '#ff9079', '#c6f496', '#ff435a', '#a802a8' ]

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')
	board.append(square)


	square.addEventListener('mouseover', () => {
		setColor(square)
	})
	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})
}

function setColor(elem) {
	const color = getRandomColor()
	elem.style.backgroundColor = color
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(elem) {
	elem.style.backgroundColor = 'rgba(203, 64, 170, 0.744)'
	elem.style.boxShadow = `0 0 2px rgba(203, 64, 170, 0.744)`
}
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}