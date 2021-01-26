

$(function () {

	$('.products-slider__items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false
	});

	$(".star").rateYo({
		starWidth: "15px",
		rating: 5,
		spacing: '3px',
		readOnly: true
	});

	$('.header__btn').on('click', function () {
		$('.menu__list').toggleClass('header__menu-active');
	});

	$('.header__menu-btn').on('click', function () {
		$('.header__box').toggleClass('active');
	});


	var mixer = mixitup('.product__items');
});

