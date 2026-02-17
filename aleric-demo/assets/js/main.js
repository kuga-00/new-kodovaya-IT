/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);


	////////////////////////////////////////////////////
	// 01. PreLoader Js

	windowOn.on('load', function () {
		var body = $('body');
		body.addClass('loaded');
		setTimeout(function () {
			body.removeClass('loaded');
		}, 1500);
	});

	document.addEventListener("DOMContentLoaded", () => {
		const svg = document.getElementById("svg");
		if (!svg) return;

		const tls = gsap.timeline();
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		// Loader heading text
		if (document.querySelector(".loader-wrap-heading")) {
			tls.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
				delay: 1.1,
				y: -100,
				opacity: 0,
			});
		}

		// SVG animation
		tls.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.in",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.out",
		});

		// Loader wrap
		if (document.querySelector(".loader-wrap")) {
		tls.to(".loader-wrap", { y: -1500 })
			.to(".loader-wrap", { zIndex: -1, display: "none" });
		}

		// Pre-header animation (safe check)
		const preHeader = document.querySelector(".pre-header");
		if (preHeader) {
		tls.from(preHeader, { y: 200 }, "-=1.5");

		const preHeaderCont = preHeader.querySelector(".containers");
			if (preHeaderCont) {
				tls.from(preHeaderCont, {
					y: 40,
					opacity: 0,
					delay: 0.1,
				}, "-=1.5");
			}
		}
	});
	
	//////////////////////////////////////////////////
	// 03. Common Js

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});


	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	$('.tp-hamburger-toggle').on('click', function () {
		$('.tp-header-side-menu').slideToggle('tp-header-side-menu');
	});



	////////////////////////////////////////////////////
	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});
	

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - -60
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
	gsap.config({
		nullTargetWarn: false,
	});


	let smoother = ScrollSmoother.create({
		smooth: 2,
		effects: true,
		smoothTouch: 0.1,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});


	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});


	if ($('.tp-hero-img-wrap').length > 0) {
		// inner-page-animation
		let t2 = gsap.timeline({
			scrollTrigger: {
			trigger: ".tp-hero-img-wrap",
			start: "top 100%",
			}
		})
		t2.from(".img3", {
			y: 100,
			opacity: 0,
			duration: 1
		})
		t2.from(".img2", {
			x: 100,
			opacity: 0,
			duration: 1
		}, "-=0.5")
		
		t2.from(".img4", {
			x: -100,
			opacity: 0,
			duration: 1
		}, "-=1")
		t2.from(".img1", {
			x: 100,
			opacity: 0,
			duration: 1
		}, "-=0.6")
		
		t2.from(".img5", {
			x: -100,
			opacity: 0,
			duration: 1
		}, "-=1")
	}


	// zoom in
	$(".anim-zoomin").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-zoomin-wrap"></div>');

		// Add overflow hidden.
		$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

		var $this = $(this);
		var $asiWrap = $this.parents(".anim-zoomin-wrap");

		let tp_ZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $asiWrap,
				start: "top 100%",
				markers: false,
			}
		});
		tp_ZoomIn.from($this, {
			duration: 1.5,
			autoAlpha: 0,
			scale: 1.1,
			ease: Power2.bounce,
			clearProps: "all"
		});


	});


	///////////////////////////
	// magnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	// Defaults
	if ($('#image-compare').length > 0) {
    const options = {
        verticalMode: true,
    };
    const element = document.getElementById("image-compare");
    const viewer = new ImageCompare(element, options).mount();

    // Overflow prevent korar jonne ensure kortesi je scrollbar visible thake
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    // Optional: Specific click handler jodi kono item e click korle scrollbar hide hoy
    $('#image-compare').on('click', function () {
			document.body.style.overflow = 'auto';
			document.documentElement.style.overflow = 'auto';
		});
	}


	////fade-class-active
	if ($(".tp-fade-anim").length > 0) {
		gsap.utils.toArray(".tp-fade-anim").forEach((item) => {
			let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
				tp_duration_value = item.getAttribute("data-duration") || 0.75,
				tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
				tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
				tp_delay_value = item.getAttribute("data-delay") || 0.15,
				tp_ease_value = item.getAttribute("data-ease") || "power2.out",
				tp_anim_setting = {
					opacity: 0,
					ease: tp_ease_value,
					duration: tp_duration_value,
					delay: tp_delay_value,
					x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
					y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
			    };
			if (tp_onscroll_value == 1) {
				tp_anim_setting.scrollTrigger = {
					trigger: item,
					start: 'top 85%',
				};
			}
			gsap.from(item, tp_anim_setting);
		});


	}



})(jQuery);