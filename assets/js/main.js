$(document).ready(function () {
	$("#slick-tributes").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: false,
		centerPadding: true,
		dots: true,
		dotsClass: "slick-dots top-dots",
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><img src='./assets/images/prev-icon.png'></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><img src='./assets/images/next-icon.png'></button>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	});

	$("#slick-tributes.mobile").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		centerPadding: true,
		dots: true,
		dotsClass: "slick-dots top-dots",
		arrows: false,
	});

	$("#blog-slider").slick({
		infinite: true,
		autoplay: false,
		dots: true,
		dotsClass: "slick-dots blog-dots",
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$("#blog-slider-secondary").slick({
		infinite: true,
		autoplay: false,
		dots: true,
		dotsClass: "slick-dots blog-dots",
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$("#testimonial-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		centerPadding: true,
		dots: true,
		dotsClass: "slick-dots blog-dots",
		arrows: false,
	});
	$("#testimonial-slider-secondary").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		centerPadding: true,
		dots: true,
		dotsClass: "slick-dots blog-dots",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$("#humburger").click(function () {
		$(".menu-wrapper").toggleClass("active");
	});
	$("#btn-close").click(function () {
		if ($(".menu-wrapper").hasClass("active")) {
			$(".menu-wrapper").toggleClass("active");
		}
	});

	$(".has-child a").click(function () {
		if ($(this).attr("aria-expanded") === "true") {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	$("#accordion .btn-link").click(function () {
		if ($(this).attr("aria-expanded") === "true") {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	$("#pageNavDropdown").click(function (e) {
		e.preventDefault();
		if ($(".pageNavDropdownItem").hasClass("active")) {
			$(".pageNavDropdownItem").removeClass("active");
		} else {
			$(".pageNavDropdownItem").addClass("active");
		}
	});
});
