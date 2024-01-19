/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['1025px', '1280px'],
		medium: ['737px', '1024px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Tweaks/fixes.

	// Polyfill: Object fit.
	if (!browser.canUse('object-fit')) {

		$('.image[data-position]').each(function () {

			var $this = $(this),
				$img = $this.children('img');

			// Apply img as background.
			$this
				.css('background-image', 'url("' + $img.attr('src') + '")')
				.css('background-position', $this.data('position'))
				.css('background-size', 'cover')
				.css('background-repeat', 'no-repeat');

			// Hide img.
			$img
				.css('opacity', '0');

		});

	}

	// Header Panel.

	// Nav.
	var $nav_a = $nav.find('a');

	$nav_a
		.addClass('scrolly')
		.on('click', function () {

			var $this = $(this);

			// External link? Bail.
			if ($this.attr('href').charAt(0) != '#')
				return;

			// Deactivate all links.
			$nav_a.removeClass('active');

			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			$this
				.addClass('active')
				.addClass('active-locked');

		})
		.each(function () {

			var $this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			// No section for this link? Bail.
			if ($section.length < 1)
				return;

			// Scrollex.
			$section.scrollex({
				mode: 'middle',
				top: '5vh',
				bottom: '5vh',
				initialize: function () {

					// Deactivate section.
					$section.addClass('inactive');

				},
				enter: function () {

					// Activate section.
					$section.removeClass('inactive');

					// No locked links? Deactivate all links and activate this section's one.
					if ($nav_a.filter('.active-locked').length == 0) {

						$nav_a.removeClass('active');
						$this.addClass('active');

					}

					// Otherwise, if this section's link is the one that's locked, unlock it.
					else if ($this.hasClass('active-locked'))
						$this.removeClass('active-locked');

				}
			});

		});

	// Title Bar.
	$titleBar = $(
		'<div id="titleBar">' +
		'<a href="#header" class="toggle"></a>' +
		'<span class="title">' + $('#logo').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$header
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'header-visible'
		});

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			if (breakpoints.active('<=medium'))
				return $titleBar.height();

			return 0;

		}
	});
	var jbOffset = $('.skill_container').offset();
	/*선택자는 본인 구조에 맞게 수정*/
	$(window).scroll(function () {
		if ($(document).scrollTop() > 750) {//여기 지정된 길이 이후부터 적용됩니다
			$('.skill_container div:nth-child(2)').addClass("stack");
			$('.skill_container div:nth-child(3)').addClass("stack2");
			$('.skill_container div:nth-child(4)').addClass("stack3");
			$('.skill_container div:nth-child(5)').addClass("stack4");
			$('.skill_container div:nth-child(6)').addClass("stack5");
			$('.skill_container div:nth-child(7)').addClass("stack6");
			$('.skill_container div:nth-child(8)').addClass("stack7");

			/*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
		}
		else {
			$('.skill_container div:nth-child(2)').removeClass("stack");
			$('.skill_container div:nth-child(3)').removeClass("stack2");
			$('.skill_container div:nth-child(4)').removeClass("stack3");
			$('.skill_container div:nth-child(5)').removeClass("stack4");
			$('.skill_container div:nth-child(6)').removeClass("stack5");
			$('.skill_container div:nth-child(7)').removeClass("stack6");
			$('.skill_container div:nth-child(8)').removeClass("stack7");
			/*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
		}
	});
})(jQuery);