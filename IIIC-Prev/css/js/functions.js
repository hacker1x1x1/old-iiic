/*
	Project Name : Astero

	## UDF Function 
		- Portfolio Single Sidebar Hight
		- Priceing Table
		- Content Slider Section
		- Expandable
		- Google-map
	
	
	## Document Ready
		-- Scrolling Navigation
		-- Responsive Caret
		-- Remove p empty tag for Shortcode
		-- Tooltip
		- Twiiter Carousel
		- Instagram Carousel
		- Rev-Slider
		- Portfolio Single Carousel
		- Price Filter
		- Quantity
		- Chekout Payment Radio
		- Woocommerce Tabs
		- CountDown
		- Map Initialization
		- RecentPost Carousel
		- Calender
		- Client Carousel 1
		- Client Carousel 2
		- Client Carousel 3
		- Client Carousel 4
		- Quick Contact Form
		- Counter
		- Skill Section
		- Circuler Skill
		- Testimonials Section
		- Vertical Progress

	## Window Load
		- Site Loader
*/


(function($)
{
	"use strict" 
	
	/* - Vertical Header */
	function vertical_menu() {
		if($(".vertical-header").length){
			var width = $(window).width();
			if($(".header-section17").length > 0){
				if ( width >= 992 ) {
					var vheader_width = $(".vertical-header").width() + 99;
					$(".content-right").css("margin-left", vheader_width);
					
				} else {
					$(".content-right").removeAttr("style");
				}
			}else {
				if ( width >= 992 ) {
					var vheader_width = $(".vertical-header").width();
					$(".content-right").css("margin-left", vheader_width - 1);
				} else {
					$(".content-right").removeAttr("style");
				}
			}
		}
	}
	
	/* - Vertical Dots */
	function vertical_dots() {
		var width = $(window).width();
		var container_width = $(".container").width();
		var content_right_padding = ( width - container_width ) / 2;
		if ( width >= 992 ) {
			$(".home10-indicators").css("right", content_right_padding);
		}else {
			$(".home10-indicators").css("right", "15px" );
		}
	}
	
	/* - Portfolio Single Sidebar Hight */
	function portfoliosidebar_height() {
		var width = $(window).width();
		var cnt_height = $(".portfolio-single-layout-5 .porject-details .group-image-list").height();
		if( width >= 768 ) {
			$(".portfolio-single-layout-5 .porject-details .col-md-4").removeAttr("style");
			$(".portfolio-single-layout-5 .porject-details .col-md-4").css("height", cnt_height);
		} else {
			$(".portfolio-single-layout-5 .porject-details .col-md-4").css("height", "auto");
		}	
	}
	
	function portfoliosidebarright_height() {
		var width = $(window).width();
		var cnt_height = $(".portfolio-single-layout-6 .porject-details .group-image-list").height();
		if( width >= 768 ) {
			$(".portfolio-single-layout-6 .porject-details .col-md-4").removeAttr("style");
			$(".portfolio-single-layout-6 .porject-details .col-md-4").css("height", cnt_height);
		} else {
			$(".portfolio-single-layout-6 .porject-details .col-md-4").css("height", "auto");
		}	
	}
	
	function singleayout7_height() {
		var width = $(window).width();
		var cnt_height = $(".portfolio-single-layout-7 .porject-details-2 .col-md-6:last-of-type").height();
		if( width >= 992 ) {
			$(".portfolio-single-layout-7 .porject-details-2 .col-md-6:first-of-type").css("style");
			$(".portfolio-single-layout-7 .porject-details-2 .col-md-6:first-of-type").css("height", cnt_height);
		} else {
			$(".portfolio-single-layout-7 .porject-details-2 .col-md-6:first-of-type").css("height", "auto");
		}	
	}
	
	/* - Priceing Table */
	function pricetable() {
		var img_pricetable;
		$( " .pricing-bg .pricing-content" ).each(function (index)
		{
			img_pricetable = $(".pricing-bg .pricing-content").eq(index).attr("data-image");
			$( " .pricing-bg .pricing-content .pricing-title" ).eq(index).css("background-image","url(" + img_pricetable + ")");
		});
	}
	
	/* - Content Slider Section */
	function content_slider_img() {
		var width = $(window).width();
		var ele_id = 0;
		if ( width) {
			var content_height = $(".contentslider-content").height();			
			$( "[id*='content_img1-']" ).removeAttr("style");
			$( "[id*='content_img1-'] img" ).remove();			
			$( "[id*='content_img1-']" ).each(function () {
				ele_id = $(this).attr('id').split("-")[1];
				var content_img = $(this).attr("data-image");
				$( "[id*='content_img1-"+ele_id+"']" ).css({"background-image":"url('" + content_img + "')"});
			});
		} else {
			/* Do nothing */
		} 
	}
	
	/* - Content Slider Section 2 */
	function content_slider_img2() {
		var width = $(window).width();
		var ele_id = 0;
		if ( width) {
			var content_height = $(".contentslider-content").height();			
			$( "[id*='content_img2-']" ).removeAttr("style");
			$( "[id*='content_img2-'] img" ).remove();			
			$( "[id*='content_img2-']" ).each(function () {
				ele_id = $(this).attr('id').split("-")[1];
				var content_img = $(this).attr("data-image");
				$( "[id*='content_img2-"+ele_id+"']" ).css({"background-image":"url('" + content_img + "')"});
			});
		} else {
			/* Do nothing */
		} 
	}
	
	/* - Content Slider Section 3 */
	function content_slider_img3() {
		var width = $(window).width();
		var ele_id = 0;
		if ( width) {
			var content_height = $(".contentslider-content").height();			
			$( "[id*='content_img3-']" ).removeAttr("style");
			$( "[id*='content_img3-'] img" ).remove();			
			$( "[id*='content_img3-']" ).each(function () {
				ele_id = $(this).attr('id').split("-")[1];
				var content_img = $(this).attr("data-image");
				$( "[id*='content_img3-"+ele_id+"']" ).css({"background-image":"url('" + content_img + "')"});
			});
		} else {
			/* Do nothing */
		} 
	}
	
	/* - Content Slider Section 4 */
	function content_slider_img4() {
		var width = $(window).width();
		var ele_id = 0;
		if ( width) {
			var content_height = $(".contentslider-content").height();			
			$( "[id*='content_img4-']" ).removeAttr("style");
			$( "[id*='content_img4-'] img" ).remove();			
			$( "[id*='content_img4-']" ).each(function () {
				ele_id = $(this).attr('id').split("-")[1];
				var content_img = $(this).attr("data-image");
				$( "[id*='content_img4-"+ele_id+"']" ).css({"background-image":"url('" + content_img + "')"});
			});
		} else {
			/* Do nothing */
		} 
	}
	
	/* - Expandable Section */
	function expandable_bg() {
		var expandableBg;
		var parent_id;
		$(".expandable-section-style-3 .panel-title > a").on('click', function(){
			parent_id = $(this).attr("data-parent").replace(/#/,'');
			$( ".expandable-section-style-3" ).each(function ( index )
			{
				var group_id = $(".expandable-section-style-3 .panel-group").eq( index ).attr("id");
				if ( parent_id == group_id ) {
					$("#" + group_id).toggleClass("act");
				} else {
					//Do Nothing
				}
			});
        });
	}
	
	/* - Expandable */
	function expandable_img() {
		$( "[id*='expandablestyle-']" ).each(function () {
			var ele_id = 0;
			var imageUrl;
			ele_id = $(this).attr('id').split("-")[1];
			$( "[id*='expandablestyle-"+ ele_id +"'] .panel" ).each(function (index) {
				imageUrl = $("[id*='expandablestyle-"+ ele_id +"'] .panel").eq(index).attr("data-image");
				$("[id*='expandablestyle-"+ ele_id +"'] .panel").eq(index).css("background-image", "url(" + imageUrl + ")");
			});
		});
	}
	
	function expandable_bgimg() {
		var expandableBgimg;
		var parent_id;
		$( "#expandablebgstyle" ).each(function () {
			var ele_id = 0;
			var imageUrl;
			ele_id = $(this).attr('id').split("-")[1];
			$( "#expandablebgstyle .panel" ).each(function (index) {
				imageUrl = $("#expandablebgstyle .panel").eq(index).attr("data-image");
				$("#expandablebgstyle .panel").eq(index).css("background-image", "url(" + imageUrl + ")");
			});
		});
		$(".expandable-style-3 .panel-title > a").on('click', function(){
			parent_id = $(this).attr("data-parent").replace(/#/,'');
			$( ".expandable-style-3 .panel-group" ).each(function ( index )
			{
				var group_id = $(".expandable-style-3 .panel-group").eq( index ).attr("id");
				if ( parent_id == group_id ) {
					$("#" + group_id+ " " +".panel").toggleClass("act");
				} else {
					//Do Nothing
				}
			});
        });
	}
	
	/* - Photo Slider */
	function slider_12() {
		$('#carousel').carouFredSel({
			responsive: true,
			circular: false,
			auto: false,
			items: {
				visible: 1,
				width: 270,
				height: '60%'
			},
			scroll: {
				fx: 'directscroll'
			}
		});
		$('#thumbs').carouFredSel({
			responsive: true,
			circular: true,
            infinite: true,
			auto: {
					play: false,
					onBefore    : function( data ) {
						var cur__id ;
						cur__id = "#_"+data.items.visible.eq(1).attr("id").split('_').pop();
						$('#carousel').trigger('slideTo', '#' + data.items.visible.eq(1).attr("id").split('_').pop() );
						$('#thumbs a').removeClass('selected');
						$(cur__id).addClass('selected');
					}
			},
			scroll:
			{
				items: 1,
			},
			prev:
			{
				button:'#prev',
				onAfter: function( data ) {
				},
				onBefore    : function( data ) {
					 var cur__id ;
					cur__id = "#_"+data.items.visible.eq(1).attr("id").split('_').pop();
					$('#carousel').trigger('slideTo', '#' + data.items.visible.eq(1).attr("id").split('_').pop() );
					$('#thumbs a').removeClass('selected');
					$(cur__id).addClass('selected');
				}
			},
			next:
			{
				button:'#next',
				onAfter: function( data ) {
				},
				onBefore    : function( data ) {
				   var cur__id ;
					cur__id = "#_"+data.items.visible.eq(1).attr("id").split('_').pop(); 
					$('#carousel').trigger('slideTo', '#' + data.items.visible.eq(1).attr("id").split('_').pop() );
					$('#thumbs a').removeClass('selected');
					$(cur__id).addClass('selected');
				}
			},
			items: {
				visible: {
					min: 1,
					max: 4
				},
				width: 270,
				height: '60%'
			}
		});
		$('#thumbs a').on("click", function() {
			$('#carousel').trigger('slideTo', '#' + this.id.split('_').pop() );
			$('#thumbs').trigger('slideTo', '#' + this.id);
			$('#thumbs a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		});
	}
	
	/* -- Skill */
	function skill() {
		var ele_id = 0;
		$( "[id*='skill-']" ).each(function () {
			ele_id = $(this).attr('id').split("-")[1];
			var skill_val = $(this).attr("data-skill");
			var cnt = 0;
			var val = 0;
			if( skill_val >= 12.5 ) {
				$("[id*='skill-"+ele_id+"'] span.top-right").css("width","50%");
				val = skill_val - 12.5;
				/* alert(val); */
				if( val >= 25 ) {
					$("[id*='skill-"+ele_id+"'] span.right").css("height","100%");
					val = val - 25;
					if( val >= 25 ) {
						$("[id*='skill-"+ele_id+"'] span.bottom").css("width","100%");
						val = val - 25;
						if ( val >= 25 ) {
							$("[id*='skill-"+ele_id+"'] span.left").css("height","100%");
							if ( val == 12.5 ) {
								$("[id*='skill-"+ele_id+"'] span.top-left").css("width","50%");
							} else {
								cnt = val * 100 / 75;
								$("[id*='skill-"+ele_id+"'] span.top-left").css("width",cnt+"%");
							}
						} else {
							cnt = val * 100 / 25;
							$("[id*='skill-"+ele_id+"'] span.left").css("height",cnt+"%");
						}
					} else {
						cnt = val * 100 / 25;
						$("[id*='skill-"+ele_id+"'] span.bottom").css("width",cnt+"%");
					}
				} else {
					cnt = val * 100 / 25;
					$("[id*='skill-"+ele_id+"'] span.right").css("height",cnt+"%");
				}
			} else {
				cnt = skill_val * 100 / 25;
				$("[id*='skill-"+ele_id+"'] span.top").css("width",cnt+"%");
			}
			$("[id*='skill-"+ele_id+"'] span").addClass("animated");
			
			var statistics_count = 0;
			statistics_count = $( "[id*='skill-"+ele_id+"']" ).attr( "data-statistics_percent" );
			$( "[id*='skill-"+ele_id+"'] .skill-detail h4" ).animateNumber({ number: skill_val }, 2000);
		});
	}
	
	/* - Google-map */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'images/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"),10);
		if( obj == "map-canvas-contact1" ){
			var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		} else if( obj == "map-canvas-contact2" ) {
			var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		} else if( obj == "map-canvas-contact3" ) {
			var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		} else if( obj == "map-canvas-contact4" ) {
			var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		
		} else {
			var styles = [{"featureType":"landscape","stylers":[{"saturation":10},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":10},{"lightness":5},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":25},{"saturation":100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#acbcc8"},{"lightness":100},{"saturation":97}]}]
		}
		var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}

		map = new google.maps.Map(document.getElementById(obj), mapOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      

        /* marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});	 */
	}
	
	
	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	= $(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$(".header-section:not(.vertical-header) .menu-block, .element-menu").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".header-section:not(.vertical-header) .menu-block, .element-menu").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".header-section:not(.vertical-header) .menu-block, .element-menu").removeClass("navbar-fixed-top animated fadeInDown");
		} /* set sticky menu - end */

		if ($(this).scrollTop() >= 50)
		{
			/* If page is scrolled more than 50px */
			$('#back-to-top').fadeIn(200);    /* Fade in the arrow */
		}
		else
		{
			$('#back-to-top').fadeOut(200);   /* Else fade out the arrow */
		}
	});

	$('#back-to-top').on("click", function()
	{
		/* When arrow is clicked */
		$('body,html').animate(
		{
			scrollTop : 0 /* Scroll to top of body */
		},800);
	});		
		
	
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {

		/* -- Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* ** set sticky menu ** */
		if( scroll >= height -500 )
		{
			$(".header-section:not(.vertical-header) .menu-block, .element-menu").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".header-section:not(.vertical-header) .menu-block, .element-menu").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".header-section:not(.vertical-header) .menu-block, .element-menu").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */
		
		
		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"]), .home10-indicators a[href*="#"]:not([href="#"])').on("click", function(e) {
	
			var $anchor = $(this);
			
			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top - 49 }, 1500, "easeInOutExpo");
			
			e.preventDefault();
			
		});
		
		$('.home10-indicators a[href*="#"]:not([href="#"])').on("click", function(e) {
	
			var $anchor = $(this);
			
			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top}, 1500, "easeInOutExpo");
			
			e.preventDefault();
			
		});
		
		$("body").scrollspy({
			target: ".home10-indicators",
			offset: 70
		}) 

		/* -- Responsive Caret */
		$(".ddl-switch").on("click", function() {
			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* - Search */
		if($(".search-box").length){
			$("#search").on("click", function(){
				$(".search-box").addClass("active")
			});
			$(".search-box span").on("click", function(){
				$(".search-box").removeClass("active")
			});
		}
		
		$( "#menu-open" ).on("click",function() {
			$( ".header-section-8 .menu-block .ow-navigation .navbar-collapse" ).toggleClass( "navbar-active" );
		});
		
		/* - Vertical Menu */
		if($(".vertical-header").length){
			vertical_menu();
		}
		
		/* - Twiiter Carousel */
		if($("#tweecool").length){
			$("#tweecool").tweecool({
				username : '@onistaweb2', 
				limit : 5,
				profile_image: false
			});
		}
		
		$(".widget_twitter .next").on('click.slide.bs.carousel',function(e){			
			$("#twitter-feeds").carousel('next');
		})
		$(".widget_twitter .prev").on('click.slide.bs.carousel',function(e){
			$("#twitter-feeds").carousel('prev');
		})
		
		/* - Instagram Carousel */
		if($(".instagram-carousel").length){
			$(".instagram-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: false,
				responsive:{
					0:{
						items:1
					},
					400:{
						items:2
					},
					768:{
						items:2
					},
					1200:{
						items:3
					}
				},
				margin: 30,
				stagePadding: 0,
				smartSpeed: 450
			});
			$(".widget_instagram .next").on("click",function(){
				$(".instagram-carousel").trigger('next.owl.carousel');
			})
			$(".widget_instagram .prev").on("click",function(){
				$(".instagram-carousel").trigger('prev.owl.carousel');
			})
		}
		
		/* Instafeed */
		if($(".social-instafeeds").length){
			$('.social-instafeeds').instagramLite({
				accessToken: '2724744264.1677ed0.58304f23b8074e3f8180c96f964477d1',
				username : 'Ch4ptergram',
				urls: true,
				limit: 6,
				load_more: '.il-foodnetwork-load-more'
			});
		}
		/* - Footer Carousel Custom Navigation */
		
		/* - Rev-Slider */
		$("#home-slider-defualt").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
				}
			},
			gridwidth:1900,
			gridheight:980 ,
		
		});
		
		/* Home 1 */
		$("#home-slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				},
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:960,
					style:"zeus",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"left",
					v_align:"bottom",
					h_offset:300,
					v_offset:80,
					space:10,
					tmp:''
				}
			},
			gridwidth:1900,
			gridheight:1020 ,
		
		});
		
		/* Home Slider 2 */
		$("#home-slider2").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:960,
					style:"persephone",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"right",
					v_align:"bottom",
					h_offset:50,
					v_offset:45,
					space:10,
					tmp:''
				}
			},
			gridwidth:1900,
			gridheight:1020 ,
		
		});
		
		/* Home Slider 4 */
		$("#home-slider4").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				},
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:960,
					style:"zeus",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:50,
					v_offset:100,
					space:15,
					tmp:''
				}
			},
			gridwidth:1900,
			gridheight:1020 ,
			spinner: "off",
		});
		
		/* Home Slider 6 */
		$("#home-slider6").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				}
			},
			gridwidth:1900,
			gridheight:840 ,
		});
		
		/* Home Slider 7 */
		$("#home-slider7").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				}
			},
			gridwidth:1900,
			gridheight:1032 ,
		});
		
		/* Home Slider 8 */
		$("#home-slider8").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:960,
					style:"persephone",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"right",
					v_align:"bottom",
					h_offset:50,
					v_offset:70,
					space:10,
					tmp:''
				}
			},
			gridwidth:1900,
			gridheight:980 ,
		});
		
		/* Home Slider 10 */
		$("#home-slider10").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				}
			},
			gridwidth:1900,
			gridheight:980 ,
			spinner: "off",
		});
		
		
		/* Home Slider 11 */
		$("#home-slider11").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:960,
					style:"persephone",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"left",
					v_align:"bottom",
					h_offset:360,
					v_offset:50,
					space:10,
					tmp:''
				}
			},
			gridwidth:1900,
			gridheight:976 ,
			spinner: "off",
		});
		
		/* Home Slider 13 */
		$("#home-slider13").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				}
			},
			gridwidth:1900,
			gridheight:976 ,
			spinner: "off",
		});
		
		/* Home Slider 14 */
		$("#home-slider14").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
		
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
					
				}
			},
			gridwidth:1900,
			gridheight:500 ,
			spinner: "off",
		});
		
		/* Home Slider 18 */
		$("#home-slider18").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:6000,
			navigation: {
				arrows:{
					enable:true,
					style:"uranus"
				}
			},
			gridwidth:1780,
			gridheight:970 ,
			spinner:"off",
		});
			
		if($(".slider-section12").length){
			slider_12();
		}
		
		/* Portfolio Sidebar Hight Count */
		portfoliosidebar_height();
		portfoliosidebarright_height();
		singleayout7_height();
		
		/* - Portfolio Single Carousel */
		$('#portfolio-single-crousal').lightSlider({
			autoWidth:true,
			slideMargin: 0,
			controls: true,
			pager: false,
			loop:true,
			onSliderLoad: function() {
				$('#portfolio-single-crousal').removeClass('portfolio-single-crousal');
			} 
		});
		
		/* - Price Filter */
		$( "#slider-range" ).slider({
			range: true,
			min: 1,
			max: 3000,
			values: [ 1, 3000 ],
			slide: function( event, ui ) {
				$( "#amount" ).html( "$" + ui.values[ 0 ] )
				$( "#amount2" ).html( "$" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount2" ).html( " $" + $(  "#slider-range" ).slider( "values", 1 ) );
		
		/* - Chekout Payment Radio */
		$('.payment-gatway .payment-option input').on("click",function () {
			if ($('.payment-gatway .payment-option input:not(:checked)')) {
				$('.payment-gatway .payment-option').removeClass('show-desc');
			}
			if ($('.payment-gatway .payment-option input').is(':checked')) {
				$(this).parent().addClass('show-desc');
			}
		});
		
		
		/* - Quantity */
		/* This button will increment the value*/
		$(".qtyplus").on( "click", function(e){
			e.preventDefault();
			var fieldName = $(this).attr('data-field');
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			if (!isNaN(currentVal)) {
				$('input[name='+fieldName+']').val(currentVal + 1);
			} else {
				$(this).find('input[name='+fieldName+']').val(0);
			}
		});

		/* This button will decrement the value till 0 */
		$(".qtyminus").on( "click" , function(e) {		
			e.preventDefault();		
			var fieldName = $(this).attr('data-field');		
			var currentVal = parseInt($('input[name='+fieldName+']').val());		
			if (!isNaN(currentVal) && currentVal > 0) {			
				$('input[name='+fieldName+']').val(currentVal - 1);
			} else {			
				$('input[name='+fieldName+']').val(0);
			}
		});
		
		/* - Woocommerce Tabs */
		$( '.wc-tabs-wrapper, .woocommerce-tabs' )
			.on( 'init', function() {
				$( '.wc-tab, .woocommerce-tabs .panel:not(.panel .panel)' ).hide();

				var hash  = window.location.hash;
				var url   = window.location.href;
				var $tabs = $( this ).find( '.wc-tabs, ul.tabs' ).first();

				if ( hash.toLowerCase().indexOf( 'comment-' ) >= 0 || hash === '#reviews' ) {
					$tabs.find( 'li.reviews_tab a' ).click();
				} else if ( url.indexOf( 'comment-page-' ) > 0 || url.indexOf( 'cpage=' ) > 0 ) {
					$tabs.find( 'li.reviews_tab a' ).click();
				} else {
					$tabs.find( 'li:first a' ).click();
				}
			})
			.on( 'click', '.wc-tabs li a, ul.tabs li a', function() {
				var $tab          = $( this );
				var $tabs_wrapper = $tab.closest( '.wc-tabs-wrapper, .woocommerce-tabs' );
				var $tabs         = $tabs_wrapper.find( '.wc-tabs, ul.tabs' );

				$tabs.find( 'li' ).removeClass( 'active' );
				$tabs_wrapper.find( '.wc-tab, .panel:not(.panel .panel)' ).hide();

				$tab.closest( 'li' ).addClass( 'active' );
				$tabs_wrapper.find( $tab.attr( 'href' ) ).show();

				return false;
			})
			.trigger( 'init' );

		$( 'a.woocommerce-review-link' ).click( function() {
			$( '.reviews_tab a' ).click();
			return true;
		});
		
		/* - Search */
		if($(".search-box").length){
			$("#search").on("click", function(){
				$(".search-box").addClass("active")
			});
			$(".search-box span").on("click", function(){
				$(".search-box").removeClass("active")
			});
		}
		
		/* - CountDown */  
		var ele_id = 0;
		$( "[id*='clock-']" ).each(function () { 
			ele_id = $(this).attr('id').split("-")[1];
			var cnt_date = $(this).attr("data-date");
			$("[id*='clock-"+ele_id+"']").countdown(cnt_date, function(event) {
				var $this = $(this).html(event.strftime(''    
					+ '<div class="countdown-box"><p>%D <span>Days</span></p></div>'
					+ '<div class="countdown-box"><p>%H <span>Hours</span></p></div>'
					+ '<div class="countdown-box"><p>%M <span>Mins</span></p></div>'
					+ '<div class="countdown-box"><p>%S <span>Secs</span></p></div>'
				));
			});
		});
		
		/* - Map Initialization */		
		if($("#map-canvas-contact1").length == 1){
			initialize("map-canvas-contact1");
		}
		if($("#map-canvas-contact2").length == 1){
			initialize("map-canvas-contact2");
		}
		if($("#map-canvas-contact3").length == 1){
			initialize("map-canvas-contact3");
		}
		if($("#map-canvas-contact4").length == 1){
			initialize("map-canvas-contact4");
		}
		
		/* - RecentPost Carousel */
		if($(".recentpost-carousel").length){
			$(".recentpost-carousel").owlCarousel({
				autoplay: false,
				loop: true,
				dots: false,
				nav: true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:2
					},
					1200:{
						items:2
					}
				},
				margin: 30,
				stagePadding: 0,
				smartSpeed: 450
			});
		}
		
		/* - Calender */
		$('#calendar').datepicker({
			inline: true,
			firstDay: 1,
			showOtherMonths: true,
			dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		});
		
		/* - Client Carousel 1 */
		if($(".client_carousel-1").length){
			$(".client_carousel-1").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: false,
				responsive:{
					0:{
						items:2
					},
					480:{
						items:3
					},
					768:{
						items:4
					},
					991:{
						items:5
					},
					1200:{
						items:6
					}
				},
				margin: 0,
				stagePadding: 0
			});
		}
		
		$(".ele-carousel.clientsection-layout3 .ele-next").on("click",function(){
			$(".client_carousel-3").trigger('next.owl.carousel');
		})
		$(".ele-carousel.clientsection-layout3 .ele-prev").on("click",function(){
			$(".client_carousel-3").trigger('prev.owl.carousel');
		})
		
		/* - Client Carousel 2 */
		if($(".client_carousel-2").length){
			$(".client_carousel-2").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: true,
				responsive:{
					0:{
						items:2
					},
					479:{
						items:3
					},
					768:{
						items:5
					},
					991:{
						items:5
					},
					1200:{
						items:6
					}
				},
				margin: 0,
				stagePadding: 0
			});
		}
		
		/* - Client Carousel 3 */
		if($(".client_carousel-3").length){
			$(".client_carousel-3").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					586:{
						items:3
					},
					768:{
						items:3
					},
					992:{
						items:5
					},
					1200:{
						items:6
					}
				},
				margin: 30,
				stagePadding: 0
			});
		}
		
		/* - Client Carousel 4 */
		if($(".client_carousel-4").length){
			$(".client_carousel-4").owlCarousel({
				autoplay: true,
				loop: true,
				dots: false,
				nav: true,
				responsive:{
					0:{
						items: 1
					},
					479:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				},
				margin: 0,
				stagePadding: 0
			});
		}
		
		
		/* - Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
			event.preventDefault();
			var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");					
						$("#input_name").val("");
						$("#input_email").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
		});/* Quick Contact Form /- */
		
		/* - Counter */
		if($(".counter-section").length) {
			$( "[id*='counter_section-']" ).each(function ()
			{
				var ele_id = 0;
				ele_id = $(this).attr('id').split("-")[1];
				
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					var statistics_item_count = 0;
					var statistics_count = 0;					
					statistics_item_count = $( "[id*='statistics_"+ ele_id +"_count-']" ).length;
					 
					for(var i=1; i<=statistics_item_count; i++)
					{
						statistics_count = $( "[id*='statistics_"+ ele_id +"_count-"+ i +"']" ).attr( "data-statistics_percent" );
						$("[id*='statistics_"+ ele_id +"_count-"+ i +"']").animateNumber({ number: statistics_count }, 4000);
					}				
				});
			});
		}
		
		/* - Skill Section */
		$( " [id*='skill_type-'] " ).each(function ()
		{
			var ele_id = 0;
			ele_id = $(this).attr('id').split("-")[1];
			
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type1_item_count = 0;
				var skill_type1_count = 0;					
				skill_type1_item_count = $( "[id*='skill_"+ ele_id +"_count-']" ).length;				
				
				for(var i=1; i<=skill_type1_item_count; i++)
				{
					skill_type1_count = $( "[id*='skill_"+ ele_id +"_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_"+ ele_id +"_count-"+i+"']").animateNumber({ number: skill_type1_count }, 5000);
				}
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar_"+ ele_id +"_count-']" ).length;
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_"+ ele_id +"_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar_"+ ele_id +"_count-"+j+"']").css({'width': skills_bar_count +'%'});
				}
			});
		});
		
		/* - Circuler Skill  */
		$( "[id*='skill_circuler-']" ).each(function ()
		{
			var ele_id = 0;
			ele_id = $(this).attr('id').split("-")[1];
			
			var $this = $(this);
			var myVal = $(this).data("value");	

			$this.appear(function()
			{
				var skill_item_count = 0;
				var skills_count = 0;

				skill_item_count = $( "[id*='skill_"+ ele_id +"_count-']" ).length;

				for(var i=1; i<=skill_item_count; i++)
				{
					skills_count = $( "[id*='skill_"+ ele_id +"_count-"+i+"']" ).attr( "data-skills_percent" );
					$("[id*='skill_"+ ele_id +"_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
				}
			});
		});

		$('.dial').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");		

			$this.appear(function()
			{
				// alert(myVal);
				$this.knob({ });
				$({ value: 0 }).animate({ value: myVal },
				{
					duration: 2000,
					easing: 'swing',
					step: function ()
					{
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			});
		});
		
		/* - Testimonials Section */
		if($(".testimonial-style-1").length){
			$(".testimonial-style-1").owlCarousel({
				loop: true,				
				margin: 10,
				dots: false,
				nav:false,				
				autoplay:true,				
				autoplayHoverPause:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:3
					}
				}
			})
		}		
		if($(".testimonial-style-2").length){
			$(".testimonial-style-2").owlCarousel({
				loop: true,				
				margin: 10,
				dots: false,
				nav:false,				
				autoplay:true,				
				autoplayHoverPause:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					992:{
						items:2
					},
					1200:{
						items:2
					}
				}
			})
		}		
		if($(".testimonial-style-4").length){
			$(".testimonial-style-4").owlCarousel({
				loop: true,				
				margin: 10,
				dots: false,
				nav:false,				
				autoplay:true,				
				autoplayHoverPause:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					992:{
						items:2
					},
					1200:{
						items:2
					}
				}
			})
		}
		
		/* - ImageSlider Carousel 1 */
		if($(".image_slider-carousel_1").length){
			$(".image_slider-carousel_1").owlCarousel({
				autoplay: false,
				loop: true,
				dots: false,
				nav: true,
				responsive:{
					0:{
						items:1
					},
					385:{
						items:2
					},
					768:{
						items:3
					},
					991:{
						items:4
					},
					1200:{
						items:5
					}
				},
				margin: 0,
				stagePadding: 0
			});
		}
		
		/* - ImageSlider: 2 Next & Prev Slider */
		$('#img_slider2').carousel({
			interval: 5000
		});
		$('#img_slider2.carousel .item').each(function () {
			var next = $(this).next();				
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
			if (next.next().length > 0) {
				next.next().children(':first-child').clone().appendTo($(this));
			} else {
				$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			}
		});
		
		$('#img_slider3').carousel({
			interval: 5000
		});
		$('#img_slider3.carousel .item').each(function () {
			var next = $(this).next();				
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
			if (next.next().length > 0) {
				next.next().children(':first-child').clone().appendTo($(this));
			} else {
				$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			}
		});
		
		/* - Home2:: ImageSlider Carousel 1 */
		if($(".home2-image-slider-carousel-1").length){
			$(".home2-image-slider-carousel-1").owlCarousel({
				autoplay: false,
				loop: true,
				dots: false,
				nav: true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					768:{
						items:2
					},
					1200:{
						items:3
					},
					1550:{
						items:4
					}
				},
				margin: 0,
				stagePadding: 0
			});
		}
		
		/* - ImageSlider Carousel 4 */
		if($(".image_slider-carousel_4").length){
			$(".image_slider-carousel_4").owlCarousel({
				autoplay: false,
				loop: true,
				dots: false,
				nav: false,
				margin: 30,
				responsive:{
					0:{
						items:1
					},
					400:{
						items:2
					},
					992:{
						items:3,
						margin: 0
					},
					1200:{
						items:4
					}
				},
				
				stagePadding: 0
			
			});
		}
		
		/* - Vertical Progress */
		if($(".vertical-progress").length) {
			$( ".bar" ).each(function () {

				var $this = $(this);
				var myVal = $(this).data("value");		

				$this.appear(function() {
			
					var percentage = $(this).data('percentage');

					$(this).animate({
					  'height' : percentage + '%'
					  
					}, 1500);
				});
			});
			$("[id*='vertical_skill-']").each(function ()
			{
				var ele_id = 0;
				ele_id = $(this).attr('id').split("-")[1];
				
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					var vertical_item_count = 0;
					var vertical_count = 0;					
					vertical_item_count = $( "[id*='vertical_"+ ele_id +"_count-']" ).length;
					
					
					$("[id*='vertical_"+ ele_id +"_count-']").each(function ()
					{
						var ele_id1 = 0;
						ele_id1 = $(this).attr('id').split("-")[1];
						vertical_count = $( "[id*='vertical_"+ ele_id +"_count-"+ele_id1+"']" ).attr( "data-statistics_percent" );
						$( "[id*='vertical_"+ ele_id +"_count-"+ ele_id1 +"']" ).animateNumber({ number: vertical_count }, 1500);
						$( "[id*='vertical_"+ ele_id +"_count-"+ ele_id1 +"']" ).css("bottom",vertical_count+"%");
					});				
				});
			});
		}
		
		pricetable();
		
		/* - Content Slider Section */
		content_slider_img();
		content_slider_img2();
		content_slider_img3();
		content_slider_img4();
		
		/* - Expandable */
		expandable_bg();
		expandable_img();
		expandable_bgimg();
		$(".expandable-style-2 .panel-title > a").on('click', function(){
			var title_id = $(this).attr("href").replace(/#expandable2-/,'');
			$("[id*='expandablestyle2-']").removeClass("act");			
			if($("[id*='expandablestyle2-"+ title_id +"'].act").length) {
				alert("hi");
				$("[id*='expandablestyle2-"+ title_id +"']").removeClass("act");
			}else {
				$("[id*='expandablestyle2-"+ title_id +"']").addClass("act");
			}
			expandable_bgimg();
        });
		
		/* - ImageGallery Layout 1 */
		if($(".image_gallery-layout1").length){
			var url;
			$(".image_gallery-layout1").magnificPopup({
				delegate: "a.img-gallery-popup",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				
				}
			});
		}
		
		/* - ImageGallery Layout 2 */
		if($(".image_gallery-layout2").length){
			var url;
			$(".image_gallery-layout2").magnificPopup({
				delegate: "a.img-gallery-popup",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				
				}
			});
		}
		
		/* - ImageGallery Layout 3 */
		if($(".image_gallery-layout3").length){
			var url;
			$(".image_gallery-layout3").magnificPopup({
				delegate: "a.img-gallery-popup",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				
				}
			});
		}
		
		/* - ImageGallery Layout 4 :: Masonry Type */
		if($(".image_gallery-layout4").length){
			var url;
			$(".image_gallery-layout4").magnificPopup({
				delegate: "a.img-gallery-popup",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				
				}
			});
		}
		
		/* - Icon Progress Bar Section:: Layout1 */
		$('.icon-progress').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type1_item_count = 0;
				var skill_type1_count = 0;
				skill_type1_item_count = $( "[id*='skill_type1_count-']" ).length;
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar1_count-']" ).length;
				
				for(var i=1; i<=skill_type1_item_count; i++)
				{
					skill_type1_count = $( "[id*='skill_type1_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_type1_count-"+i+"']").animateNumber({ number: skill_type1_count }, 9000);
				}			
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_type1_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar1_count-"+j+"']").css({'width': skills_bar_count+'%'});
				}
			});
		});
		
		/* - Icon Progress Bar Section:: Layout2 */
		$('.icon-progress').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type2_item_count = 0;
				var skill_type2_count = 0;
				skill_type2_item_count = $( "[id*='skill_type2_count-']" ).length;
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar2_count-']" ).length;
				
				for(var i=1; i<=skill_type2_item_count; i++)
				{
					skill_type2_count = $( "[id*='skill_type2_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_type2_count-"+i+"']").animateNumber({ number: skill_type2_count }, 2000);
				}			
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_type2_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar2_count-"+j+"']").css({'width': skills_bar_count+'%'});
				}
			});
		});
		
		/* - Icon Progress Bar Section:: Layout3 */
		$('.icon-progress').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type3_item_count = 0;
				var skill_type3_count = 0;
				skill_type3_item_count = $( "[id*='skill_type3_count-']" ).length;
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar3_count-']" ).length;
				
				for(var i=1; i<=skill_type3_item_count; i++)
				{
					skill_type3_count = $( "[id*='skill_type3_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_type3_count-"+i+"']").animateNumber({ number: skill_type3_count }, 2000);
				}			
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_type3_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar3_count-"+j+"']").css({'width': skills_bar_count+'%'});
				}
			});
		});
		
		/* - Icon Progress Bar Section:: Layout4 */
		$('.icon-progress').each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type4_item_count = 0;
				var skill_type4_count = 0;
				skill_type4_item_count = $( "[id*='skill_type4_count-']" ).length;
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar4_count-']" ).length;
				
				for(var i=1; i<=skill_type4_item_count; i++)
				{
					skill_type4_count = $( "[id*='skill_type4_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_type4_count-"+i+"']").animateNumber({ number: skill_type4_count }, 2000);
				}			
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_type4_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar4_count-"+j+"']").css({'width': skills_bar_count+'%'});
				}
			});
		});
		
		/* - Home5 Slider Section */
		$('#home5_carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 260,
			itemMargin: 35,
			asNavFor: '#home5_slider'
		});
		 
		$('#home5_slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			controlsContainer: $(".custom-controls-container"),
			customDirectionNav: $(".custom-navigation a"),
			start: function(slider){
			  $('body').removeClass('loading');
			},
			sync: "#home5_carousel"
		});
		
		/* - Vertical Dots */
		vertical_dots();
		$(".home10-indicators li a").on('click', function(){
			$( ".home10-indicators li" ).removeClass( "active" );
            $( this ).parent( "li" ).addClass( "active" );
		});
		 $('body').scrollspy({target: ".navbar", offset: 50});
		
		skill();
		
	});/* document.ready /- */
	
	/* ## Window Resize */
	$( window ).resize(function() {
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Vertical Menu */
		vertical_menu();
		
		if($(".slider-section12").length){
			slider_12();
		}
		/* - Content Slider Section */
		content_slider_img();
		content_slider_img2();
		content_slider_img3();
		content_slider_img4();
		
		
		
		/* - Vertical Dots */
		vertical_dots();
	});	
	
	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {
		/* - Site Loader */
		if ( !$("html").is(" .ie6, .ie7, .ie8 ") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		
		var $container = $(".portfolio-section .portfolio-list");
		$container.isotope({
			itemSelector: "li",
			gutter: 0,
			transitionDuration: "0.5s"
		});
		
		$("#filters a").on("click",function(){
			$('#filters a').removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$container.isotope({ filter: selector });		
			return false;
		});
		
		/* - Blog Masonry */
		if($(".blog_masonry").length){
			var $container = $(".blog-masonry-list");
			$container.isotope({
				itemSelector: ".blog-masonry-box",
				gutter: 0,
				transitionDuration: "0.5s"
			});
		}
		
		/* - ImageGallery Layout 4 :: Masonry Type */
		if($(".image_gallery-layout4").length){
			var $container = $(".gallery-masonry-list");
				$container.isotope({
				itemSelector: ".gallery-masonry-box",
				gutter: 0,
				transitionDuration: "0.5s"
			});
		}
		
		if($(".slider-section12").length){
			slider_12();
		}
	});
	
})(jQuery);