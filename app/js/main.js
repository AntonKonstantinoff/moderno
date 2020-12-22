$(function () {

	var mixer = mixitup('.product__items');

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

});