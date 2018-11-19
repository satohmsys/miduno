import $ from 'jquery';
import 'slick-carousel';

import 'lazysizes/lazysizes.min';
import 'lazysizes/plugins/print/ls.print.min';


let $w = $(window),
	$body = $('body'),
	$flag = true;

/**
* スクロール値を取得する
*/
var getScrollVal = (callback) => {
	$w.on('scroll load', function () {
		let $scrollVal = $w.scrollTop();
		// return $scrollVal;
		callback($scrollVal);
	});
}

$('.siteFooter__backToTop').on('click', function (e) {
	e.preventDefault();
	e.stopPropagation();

	$('body,html').animate({
		scrollTop: 0
	}, '800', 'swing');
});



/**
* sp button
*/
var $toggle = $('.navToggle');

$toggle.on('click', function () {
	$body.toggleClass('-is-navOpen');
});
$w.on('resize', function () {
	if ($flag) {
		$flag = false;
		setTimeout(function () {
			if (700 < $w.width()) {
				$body.removeClass('-is-navOpen');
			}
			$flag = true;
			return $flag;
		}, 500);
	}
});

/**
 * scroll effect
 */

let f = ($scrollVal) => {
	let $jsEffect = $('.js-effect'),
		$scrollBottom = $scrollVal + $w.height();

	/**
	* all fadein targets
	*/
	if ( $jsEffect ) {
		$.each($jsEffect, function () {
			let $target = $(this);

			if ($target.offset().top < $scrollBottom - 90) {
				$target.addClass('-on');
			} 
		});
	}
}
getScrollVal(f);



/**
 * scroll signal
 */
let f2 = ($scrollVal) => {
	500 < $scrollVal ? $body.addClass('-isScrolled') : $body.removeClass('-isScrolled')
}

getScrollVal(f2);


/**
 * loading
 */
let $loadingAnim = $('.loadingAnim');

if ($loadingAnim.length ) {
	new Promise(( resolve ) => {
		window.addEventListener('load', () =>{
			document.body.classList.add('-is-ready');
		})
		resolve( );
	}).then(( resolve ) => {
		document.querySelector('.loadingAnim .mask__element').addEventListener('transitionend', ( e ) => {
			e.stopPropagation();
			document.body.classList.add('-is-loaded');
		});
	}).then(( resolve ) => {
		document.getElementsByClassName('loadingAnim')[0].addEventListener('transitionend', (e) => {
			e.stopPropagation();
			if (e.propertyName == 'transform'){
				setTimeout(() => {
					$loadingAnim.remove();
				}, 1500); 
			}
			document.body.classList.add('-is-loadend');
		
			$('.mv__imgs').slick({
				arrows: false,
				autoplay: true,
				autoplaySpeed: 4500,
				dots: true,
				pauseOnFocus: false,
				pauseOnHover: false,
				pauseOnDotsHover: false,
				infinite: true,
				fade: true,
				pause: 4500,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
			});
		});
	});

	// if ($loadingAnim.length) {
	// 	$w.on('load', function () {
	// 		$('body').addClass('-is-ready');

	// 		$('.loadingAnim .mask__element').on('transitionend', function (e) {
	// 			e.stopPropagation();
	// 			e.preventDefault();

	// 			$('body').addClass('-is-loaded');

	// 			$('.loadingAnim').on('transitionend', function (e) {
	// 				e.stopPropagation();
	// 				$('body').addClass('-is-loadend');
	// 				// $loadingAnim.remove();
	// 			});
	// 		});
	// 	});
	// }

}

/**
 * smooth scroll
 */
$('a[href^="#"]').click(function ( e ) {
	e.stopPropagation();
	e.preventDefault();

	var speed = 500,
		href = $(this).attr("href"),
		target = $(href == "#" || href == "" ? 'html' : href),
		position = target.offset().top - $('.siteHeader' ).height();

	$("html, body").animate({ scrollTop: position }, speed, "swing");
	return false;
});
$( '.scrollTop' ).on( 'click', function( e ){
	e.stopPropagation();
	e.preventDefault();

	$( 'body,html' ).animate({
		scrollTop: 0
	}, 500, 'swing')

} )


export { $ };
export { $w };
export { getScrollVal };
