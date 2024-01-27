"use strict"

// Task 3!!

$(document).ready(function () {

	// Creating a tag 'DIV'
	let Div = $('<div></div>');

	// Adding Div to body
	$('body').prepend(Div);

	// Adding css style to Div
	Div.css({
		position: 'absolute',
		top: '1vw',
		left: '1vw',
		width: '70px',
		height: '70px',
		border: `4px solid black`,
		borderRadius: '50%'
	})

	// Crazy ball
	let color = '';
	const changeColor = () => {
		color =	     `${Math.round(Math.random() * 255)},
									${Math.round(Math.random() * 255)},
									${Math.round(Math.random() * 255)}`
	}
	function crazyBall() {
		changeColor();
		Div.animate({
			top: Math.round(Math.random() * (innerHeight - 200)),
			left: Math.round(Math.random() * (innerWidth - 200)),
			backgroundColor: `rgb(${color})`,
			borderColor: `rgb(${Math.round(Math.random() * 255)},
												${Math.round(Math.random() * 255)},
												${Math.round(Math.random() * 255)})`
		}, {
			easing: 'easeOutElastic',
		});
		Div.css({
			boxShadow: `0 0 25px 25px rgb(${color}, 0.6)`
		});
	}
	crazyBall();
	setInterval(crazyBall, 1000);
});
