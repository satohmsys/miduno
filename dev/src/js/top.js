import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'slick-carousel';


$( function(){
	
	$('.mv__imgs').slick({
		arrows: false,
		autoplay: true,
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		infinite: true,
		fade: true,
		pause: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
	});
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
	
});

/**
 * インジケーター  
 */

getScrollVal( function( scrollVal ){
	let $sections = $( '.section--catetory' ),
		$scrollBottom = scrollVal + $w.height()*1.1;

	$.each($sections, function( e ){
		let $section = $( this ),
			$section_offsets = $section.offset().top;
		if( $section_offsets < scrollVal ){
			let $id = $section.attr( 'id' );

			$( '.siteHeader__nav li a' ).removeClass( 'active' );
			$( '.siteHeader__nav li a[ href="#' + $id + '"]' ).addClass( 'active' );
		} else if ( scrollVal < 400) {
			 $('.siteHeader__nav li a').removeClass('active')
		}
	} )

})
