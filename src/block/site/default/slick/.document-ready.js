'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#pagin-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#pagin-next"></use></svg></button>';	
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#pagin-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#pagin-next"></use></svg></button>';	
	//var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/okna/img/svg/sprite.svg#pagin-prev"></use></svg></button>';
	//var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/okna/img/svg/sprite.svg#pagin-next"></use></svg></button>';
	
	/*header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});*/
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 