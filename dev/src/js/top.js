import $ from 'jquery';
import 'slick-carousel';
import '@fancyapps/fancybox';
var $hh = $('.siteHeader').outerHeight();


$('.business__movie__play' ).fancybox({
	src: 'https://youtu.be/Gp0g92Hd0qU'
});


/**
 * loading
 */
let $loadingAnim = $('.loadingAnim');

if ($loadingAnim.length) {
	new Promise((resolve) => {
		window.addEventListener('load', () => {
			// document.body.classList.add('-is-ready');
			document.body.classList.add('-is-loaded');

		})
		resolve();
	}).then((resolve) => {
		document.querySelector('.loadingAnim .mask__element').addEventListener('transitionend', (e) => {
			e.stopPropagation();
			document.body.classList.add('-is-loaded');
		});
	}).then((resolve) => {
		document.getElementsByClassName('loadingAnim')[0].addEventListener('transitionend', (e) => {
			e.stopPropagation();
			if (e.propertyName == 'transform') {
				setTimeout(() => {
					$loadingAnim.remove();
				}, 500);
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


	$('.brands__imgs').slick({
		arrows: true,
		autoplay: false,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		infinite: true,
		fade: true,
		pause: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
	});	


	$( '.recruitInfo__detail__index' ).on( 'click', function( e ){
		e.stopPropagation();
		e.preventDefault();

		let $target = $( this );
		$target.next( ).slideToggle( 400 ).parent( '.recruitInfo__detail' ).toggleClass( '-open' );
	})
	

/**
 * インジケーター  
 */

// getScrollVal( function( scrollVal ){
// 	let $sections = $( '.section--catetory' ),
// 		$scrollBottom = scrollVal + $w.height() + $hh;

// 	$.each($sections, function( e ){
// 		let $section = $( this ),
// 			$section_offsets = $section.offset().top;
// 		if( $section_offsets < scrollVal ){
// 			let $id = $section.attr( 'id' );

// 			$( '.siteHeader__nav li' ).removeClass( 'active' );
// 			$( '.siteHeader__nav li a[ href="#' + $id + '"]' ).parent().addClass( 'active' );
// 		} else if ( scrollVal < 400) {
// 			 $('.siteHeader__nav li').removeClass('active')
// 		}
// 	} )

// })
