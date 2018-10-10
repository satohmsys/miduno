import $ from 'jquery';
import { getScrollVal, $w } from './common.js';
import 'slick-carousel';


// var effefcts = () => {
	$( function(){
		
		$('.mv__imgs').slick({
			arrows: false,
			autoplay: true,
			autoplayspeed: 700,
		  pauseOnFocus: false,
		  pauseOnHover: false,
		  pauseOnDotsHover: false,	
			dots: false,
			infinite: true,
			pause: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 700,
		});
		
	});
// }

// export default function(){
// 	effefcts();
// }