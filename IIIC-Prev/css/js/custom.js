(function($) { "use strict";

 	

	$(".accordion").smk_Accordion({

		closeAble: true 

	});







	var $doc_height = jQuery(window).innerHeight();

	// jQuery('.home-carousel-wrap').css("height", $doc_height);

	jQuery('#owl-home .item').css("height", $doc_height);

	jQuery('.vc_row-o-full-height').css("height", $doc_height);

	jQuery('.full-height').css("height", $doc_height);

	var picheight = jQuery('.vc_row-o-columns-middle > .container').css("height");

	picheight = parseInt(picheight, 10);

	jQuery('.vc_row-o-columns-middle > .container').css('padding-top', (($doc_height - picheight)/2)-30);



	//video fitvids

	$('.container').fitVids();



	$('.vimeo a,.youtube a').click(function (e) {

		e.preventDefault();

		var videoLink = $(this).attr('href');

		var classeV = $(this).parent();

		var PlaceV = $(this).parent();

		if ($(this).parent().hasClass('youtube')) {

			$(this).parent().wrapAll('<div class="video-wrapper">');

			$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');

		} else {

			$(this).parent().wrapAll('<div class="video-wrapper">');

			$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=cfa144" width="500" height="281" frameborder="0"></iframe>');

		}

	});



	// Add class pagination

    $('ul.cd-pagination li a.next').parent().addClass('button-pag'); 

    $('ul.cd-pagination li a.prev').parent().addClass('button-pag');



    // Add class for columns : 10, 11, 12 skeleton.  

   	$('.container').find('div').each(function(i, ojb) {

        if ( $(this).hasClass('one columns2') ) {

            $(this).removeClass('one columns2').addClass('twelve columns');

        }



        if ( $(this).hasClass('one columns1') ) {

            $(this).removeClass('one columns1').addClass('eleven columns');

        }



        if ( $(this).hasClass('one columns0') ) {

            $(this).removeClass('one columns0').addClass('ten columns');

        }

    });



   	$('.row').find('div').each(function(i, ojb) {

        if ( $(this).hasClass('one columns2') ) {

            $(this).removeClass('one columns2').addClass('twelve columns');

        }



        if ( $(this).hasClass('one columns1') ) {

            $(this).removeClass('one columns1').addClass('eleven columns');

        }



        if ( $(this).hasClass('one columns0') ) {

            $(this).removeClass('one columns0').addClass('ten columns');

        }

    });



    $( "ul.sf-menu > li:last-child" ).removeClass('left').addClass('right');

	

   	// add class text auto write

	$('span.cd-words-wrapper.waiting b:first').addClass('is-visible');   



   	//Remove Class

	$('.wpcf7').parents('.columns').removeClass('columns'); 

	$('.columns').parents('.columns').removeClass('columns').addClass('float-left'); 



	//Parallax		

	$(window).load(function() {



		$('section').find('div[class^="parallax-row"]').each(function() {

			$(this).parallax("50%", 0.4);

		});

	});

	$('.parallax-freelance').parallax("50%", 0.4);

	$('.parallax-subheader').parallax("50%", 0.4);

	$('.parallax-shop-page').parallax("50%", 0.4);



	



	//Navigation

	$('ul.onepage-menu').on('click',function(){

			var width = $(window).width(); 

			if ((width <= 1200)){ 

			$(this).slideToggle(); 

		}	

	});				

	$('ul.onepage-menu').slimmenu(

			{

			resizeWidth: '1200',

			collapserTitle: '',

			easingEffect:'easeInOutQuint',

			animSpeed:'medium',

			indentChildren: true,

			childrenIndenter: '&raquo;'

	});

	



	var $normalNavLi = $( 'ul.sf-menu li.menu-item-has-children' );

	$normalNavLi.each( function() {

		

			var $this = $( this ),

				$li = $this;



			$li.each( function() {



				var $this = $( this ),

					$ul = $( this );



				if ( $ul.length > 0 ) {



					$( '<i class="fa fa-angle-right"></i>').appendTo( $( this ) );					



				}



			} );

		

	} );



	$("ul.sf-menu li").hover(function (e) {

			if ($(window).width() > 1200) {

				$(this).children("ul").stop(true, false).fadeToggle(300);

				$(this).children("div.mega-menu-container").stop(true, false).fadeToggle(300);

				e.preventDefault();

			}

		});

	$("ul.sf-menu  li i").click(function () {

			if ($(window).width() <= 1200) {

				$(this).parent().find('> ul').fadeToggle(300);

				$(this).parent().find('> div.mega-menu-container').fadeToggle(300);

			}

		});

	// $('ul.sf-menu > li:has( > ul)').addClass('menu-dropdown-icon');

	$("ul.sf-menu").before("<a href=\"#\" class=\"menu-mobile\"><i class=\"fa fa-2 fa-bars\"></i></a>");

	$(".menu-mobile").click(function (e) {

			$("ul.sf-menu").toggleClass('show-on-mobile');

			e.preventDefault();

		});



	//Fancybox		

	$(".fancybox").fancybox({

		maxWidth	: 1700,

		maxHeight	: 900,

		fitToView	: false,

		width		: '80%',

		height		: '80%',

		autoSize	: false,

		closeClick	: false,

		openEffect	: 'elastic',

		closeEffect	: 'none',

		prevEffect	: 'fade',

		nextEffect	: 'fade',

		helpers	: {

			title	: {

				type: 'outside'

			},

		}

		

	});

	

	// Skills

	function animateProgressBar() {

		$('.pro-bar').each(function(i, elem) {

			var	elem = $(this),

				percent = elem.attr('data-pro-bar-percent'),

				delay = elem.attr('data-pro-bar-delay');



			if (!elem.hasClass('animated'))

				elem.css({ 'width' : '0%' });



			if (elem.visible(true)) {

				setTimeout(function() {

					elem.animate({ 'width' : percent + '%' }, 1500, 'easeInOutExpo').addClass('animated');

				}, delay);

			} 

		});

	}

	$(document).ready(function() {

		animateProgressBar();

	});

	$(window).resize(function() {

		animateProgressBar();

	});

	$(window).scroll(function() {

		animateProgressBar();

		if ($(window).scrollTop() + $(window).height() == $(document).height())

			animateProgressBar();

	});		



    



    // Portfolio filter

    var $grid = $('#projects-grid').imagesLoaded( function() {

        $grid.isotope({                     

            itemSelector: '.portfolio-box-1',

            percentPosition: true,  

        });

    }); 

    $('#portfolio-filter #filter a').click(function(){

        $('#portfolio-filter #filter a').removeClass('current');

        $(this).addClass('current');             

        var selector = $(this).attr('data-filter');

        $grid.isotope({

            filter: selector,                       

            animationOptions: {

                duration: 750,

                easing: 'linear',

                queue: false

            }

        });

        return false;

    });

	

	//Scroll back to top



	var offset = 450;

	var duration = 1500;

	jQuery(window).scroll(function() {

		if (jQuery(this).scrollTop() > offset) {

			jQuery('.scroll-to-top').fadeIn(duration);

		} else {

			jQuery('.scroll-to-top').fadeOut(duration);

		}

	});

			

	jQuery('.scroll-to-top').click(function(event) {

		event.preventDefault();

		jQuery('html, body').animate({scrollTop: 0}, duration);

		return false;

	})

	

	/* Scroll Animation */

	

      window.scrollReveal = new scrollReveal();

	

	//Home text fade on scroll	

	

	$(window).scroll(function () { 

        var $Fade = $('.fade-elements');

        //Get scroll position of window 

        var windowScroll = $(this).scrollTop();

        //Slow scroll and fade it out 

        $Fade.css({

            'margin-top': -(windowScroll / 0) + "px",

            'opacity': 0.99 - (windowScroll / 400)

        });

    });	

	

	/* Scroll Too */

	

			$(window).load(function(){"use strict";

				

				/* Page Scroll to id fn call */

				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({

					highlightSelector:"ul.slimmenu li a",

					offset: 78,

					scrollSpeed:800,

					scrollEasing: "easeInOutCubic"

				});

				

				/* demo functions */

				$("a[rel='next']").on(function(e){

					e.preventDefault();

					var to=$(this).parent().parent("section").next().attr("id");

					$.mPageScroll2id("scrollTo",to);

				});

				

			});	



		

		

	

	$(document).ready(function() {



		



		//Tooltip



		$(".tipped").tipper();

	

		/* Separate Carousels */

	 

		$("#owl-sep-1").owlCarousel({

			navigation: false,

			pagination : true,

			transitionStyle : "fade",

			slideSpeed : 500,

			paginationSpeed : 500,

			singleItem:true,

			autoPlay: 5000

		});



		/* Logos Carousel */		

		

		$("#owl-logos").owlCarousel({

			items : 5,

			itemsDesktop : [1000,4], 

			itemsDesktopSmall : [900,3],

			itemsTablet: [600,2], 

			itemsMobile : false, 

			navigation: false,

			pagination : true,

			autoPlay : 3000,

			slideSpeed : 300

		});		



		

		//Facts Counter 

	

        $('.counter-numb').counterUp({

            delay: 100,

            time: 3000

        });



			

 	//Home Carousel

		

	  var sync1 = $("#sync1");

	  var sync2 = $("#sync2");

	 

	  sync1.owlCarousel({

		singleItem : true,

		autoPlay: 5000,

		transitionStyle : "fade",

		autoHeight : false,

		slideSpeed : 200,

		navigation: false,

		pagination:false,

		afterAction : syncPosition,

		responsiveRefreshRate : 200

	  });



	  

	  sync2.owlCarousel({

		items : 3,

		itemsDesktop      : [1199,3],

		itemsDesktopSmall     : [979,3],

		itemsTablet       : [768,3],

		itemsMobile       : [479,3],

		pagination:false,

		responsiveRefreshRate : 100,

		afterInit : function(el){

		  el.find(".owl-item").eq(0).addClass("synced");

		}

	  });

	 

	  function syncPosition(el){

		var current = this.currentItem;

		$("#sync2")

		  .find(".owl-item")

		  .removeClass("synced")

		  .eq(current)

		  .addClass("synced")

		if($("#sync2").data("owlCarousel") !== undefined){

		  center(current)

		}

	  }

	 

	  $("#sync2").on("click", ".owl-item", function(e){

		e.preventDefault();

		var number = $(this).data("owlItem");

		sync1.trigger("owl.goTo",number);

	  });

	 

	  function center(number){

		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

		var num = number;

		var found = false;

		for(var i in sync2visible){

		  if(num === sync2visible[i]){

			var found = true;

		  }

		}

	 

		if(found===false){

		  if(num>sync2visible[sync2visible.length-1]){

			sync2.trigger("owl.goTo", num - sync2visible.length+2)

		  }else{

			if(num - 1 === -1){

			  num = 0;

			}

			sync2.trigger("owl.goTo", num);

		  }

		} else if(num === sync2visible[sync2visible.length-1]){

		  sync2.trigger("owl.goTo", sync2visible[1])

		} else if(num === sync2visible[0]){

		  sync2.trigger("owl.goTo", num-1)

		}

		

	  }

	});	

	

	

	

	 // Portfolio Ajax

	 

			$(window).load(function() {

			'use strict';		  

			  var loader = $('.expander-wrap');

			if(typeof loader.html() == 'undefined'){

				$('<div class="expander-wrap"><div id="expander-wrap" class="container clearfix relative"><p class="cls-btn"><a class="close">X</a></p><div/></div></div>').css({opacity:0}).hide().insertAfter('.portfolio');

				loader = $('.expander-wrap');

			}

			$('.expander').on('click', function(e){

				e.preventDefault();

				e.stopPropagation();

				var url = $(this).attr('href');







				loader.slideUp(function(){

					$.get(url, function(data){

						var portfolioContainer = $('.portfolio');

						var topPosition = portfolioContainer.offset().top;

						var bottomPosition = topPosition + portfolioContainer.height();

						$('html,body').delay(600).animate({ scrollTop: bottomPosition - 70}, 800);

						var container = $('#expander-wrap>div', loader);

						

						container.html(data);

						

						$("#owl-portfolio-slider").owlCarousel({

							  

							pagination:true,

							slideSpeed : 300,

							autoPlay : 5000,

							singleItem:true							

						 

						});

						

						$(".container").fitVids();

						

						$('.vimeo a,.youtube a').click(function (e) {

							e.preventDefault();

							var videoLink = $(this).attr('href');

							var classeV = $(this).parent();

							var PlaceV = $(this).parent();

							if ($(this).parent().hasClass('youtube')) {

								$(this).parent().wrapAll('<div class="video-wrapper">');

								$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');

							} else {

								$(this).parent().wrapAll('<div class="video-wrapper">');

								$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=cfa144" width="500" height="281" frameborder="0"></iframe>');

							}

						});	

						

						loader.slideDown(function(){

							if(typeof keepVideoRatio == 'function'){

								keepVideoRatio('.container > iframe');

							}

						}).delay(1000).animate({opacity:1}, 200);

					});

				});

			});

			

			$('.close', loader).on('click', function(){

				loader.delay(300).slideUp(function(){

					var container = $('#expander-wrap>div', loader);

					container.html('');

					$(this).css({opacity:0});

					

				});

				var portfolioContainer = $('.portfolio');

					var topPosition = portfolioContainer.offset().top;

					$('html,body').delay(0).animate({ scrollTop: topPosition - 70}, 500);

			});



	});		

	

  })(jQuery); 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 











	