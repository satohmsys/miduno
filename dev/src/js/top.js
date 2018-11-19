import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'slick-carousel';

var $hh = $('.siteHeader').outerHeight();

$( function(){


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
		$scrollBottom = scrollVal + $w.height() + $hh;

	$.each($sections, function( e ){
		let $section = $( this ),
			$section_offsets = $section.offset().top;
		if( $section_offsets < scrollVal ){
			let $id = $section.attr( 'id' );

			$( '.siteHeader__nav li' ).removeClass( 'active' );
			$( '.siteHeader__nav li a[ href="#' + $id + '"]' ).parent().addClass( 'active' );
		} else if ( scrollVal < 400) {
			 $('.siteHeader__nav li').removeClass('active')
		}
	} )

})
