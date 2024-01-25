'use strict';

// Task 1!!

$(document).ready(function () {

	let ModalPosition;
	let ModalContainer = $('.modal-container');
	let Modal = $('.modal');
	let Box = $('.box');

	Box.on('click', function () {
		ModalPosition = $(this).position();

			$(this).css('opacity', 0);
			ModalContainer.show();
			ModalContainer.animate({
				opacity: 1
			}, 2000)

			Modal.show();
			Modal.css({
				top: ModalPosition.top,
				left: ModalPosition.left,
				backgroundColor: $(this).css('background-color'),
			})
			Modal.animate({
				width: '350px',
				height: '350px',
				top: (window.innerHeight - 350)/2,
				left: (window.innerWidth - 350)/2,
			}, 2000, 'easeInOutElastic')
	})

	Modal.on('click', function () {
		ModalContainer.animate({
			opacity: 0
		}, 2000)
		Modal.animate({
			width: '150px',
			height: '150px',
			top: ModalPosition.top,
			left: ModalPosition.left,
		}, 2000, 'easeInBounce', function () {
			Box.css('opacity', 1);
			Modal.hide();
			ModalContainer.hide();
		});
	})
})

