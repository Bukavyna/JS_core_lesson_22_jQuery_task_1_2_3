"use strict"

// Task 2!!


$(document).ready(function () {

	let Circle = $('.circle');

	Circle.on('click', function () {

		let randomColor = `rgb(${Math.round(Math.random() * 255)},
							             ${Math.round(Math.random() * 255)},
							             ${Math.round(Math.random() * 255)})`;

		Circle.css({
			backgroundColor: randomColor,
		});

		Circle.animate({
			width: Math.round(Math.random() * 100) + 20,
			height: Math.round(Math.random() * 100) + 20,
			top: Math.round(Math.random() * (window.innerHeight - 100)),
			left: Math.round(Math.random() * (window.innerWidth - 100)),
		}, 500, 'easeOutElastic')

	});

});