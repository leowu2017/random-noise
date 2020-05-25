const canvas = document.querySelector('canvas');
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
});

setInterval(function() {
	const iterNo = 500;
	for (let idx = 0; idx < iterNo; idx++) {
		const color = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
		const x = Math.floor(Math.random() * width);
		const y = Math.floor(Math.random() * height);
		ctx.fillStyle = color;
		ctx.fillRect(x, y, 1, 1);
	}
}, 0.1);