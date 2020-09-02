jQuery(function($){"use strict";window.onload=function(){document.getElementById('loading-mask').style.display='none';}
$(".media-wrapper").fitVids();var nice=$("html").niceScroll({cursorborderradius:0,cursorwidth:"8px",cursorfixedheight:150,cursorcolor:"#ff0036",zindex:9999,cursorborder:0,});$(window).scroll(function(){if($(window).scrollTop()>400){$("#scrollUp").fadeIn(200);}else{$("#scrollUp").fadeOut(200);}});$('#scrollUp').click(function(){$('html, body').stop().animate({scrollTop:0},1500,'easeInOutExpo');});$("#post-thumb, #gallery-post").owlCarousel({navigation:true,pagination:false,slideSpeed:800,autoHeight:true,paginationSpeed:800,singleItem:true,navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]});$("#features").owlCarousel({navigation:false,pagination:true,slideSpeed:800,singleItem:true,transitionStyle:"fadeUp",paginationSpeed:800,});$("#navigation").sticky({topSpacing:0});$('#nav').onePageNav({currentClass:'current',changeHash:false,scrollSpeed:1500,scrollThreshold:0.5,filter:'',easing:'easeInOutExpo'});var slideHeight=$(window).height();$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);$(window).resize(function(){'use strict',$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);});(function(){var count={initialized:false,initialize:function(){if(this.initialized)
return;this.initialized=true;this.build();},build:function(){this.animations();},animations:function(){$(".counters-item [data-to]").each(function(){var $this=$(this);$this.appear(function(){$this.countTo({});},{accX:0,accY:-150});});},};count.initialize();})();$(".chart").appear(function(){$(".chart").easyPieChart({easing:"easeOutBounce",barColor:"#ff0036",size:"150",lineWidth:15,animate:2e3,onStep:function(e,t,n){$(this.el).find(".percent").text(Math.round(n))}})});$(".tweet").twittie({dateFormat:"%b. %d, %Y",template:"{{tweet}}",count:1});$('#og-grid').mixItUp();Grid.init();$("#testimonials").owlCarousel({slideSpeed:500,paginationSpeed:500,singleItem:true,pagination:true,transitionStyle:"backSlide"});

function initialize(){var myLatLng=new google.maps.LatLng(22.333851,91.812256);var roadAtlasStyles=[{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#2F3238"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#FFFFFF"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#50525f"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#808080"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#808080"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#3071a7"},{"saturation":-65}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#bbbbbb"}]}];var mapOptions={zoom:14,center:myLatLng,disableDefaultUI:true,scrollwheel:false,navigationControl:false,mapTypeControl:false,scaleControl:false,draggable:false,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,'roadatlas']}};var map=new google.maps.Map(document.getElementById('map-canvas'),mapOptions);var marker=new google.maps.Marker({position:myLatLng,map:map,icon:'img/location-icon.png',title:'',});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});var styledMapOptions={name:'US Road Atlas'};var usRoadMapType=new google.maps.StyledMapType(roadAtlasStyles,styledMapOptions);map.mapTypes.set('roadatlas',usRoadMapType);map.setMapTypeId('roadatlas');}
google.maps.event.addDomListener(window,"load",initialize);});wow=new WOW({animateClass:'animated',offset:120});wow.init();$(function(){var Page=(function(){var $navArrows=$('#nav-arrows'),$nav=$('#nav-dots > span'),slitslider=$('#slitSlider').slitslider({speed:1600,onBeforeChange:function(slide,pos){$nav.removeClass('nav-dot-current');$nav.eq(pos).addClass('nav-dot-current');}}),init=function(){initEvents();},initEvents=function(){$navArrows.children(':last').on('click',function(){slitslider.next();return false;});$navArrows.children(':first').on('click',function(){slitslider.previous();return false;});$nav.each(function(i){$(this).on('click',function(event){var $dot=$(this);if(!slitslider.isActive()){$nav.removeClass('nav-dot-current');$dot.addClass('nav-dot-current');}
slitslider.jump(i+1);return false;});});};return{init:init};})();Page.init();});"use strict";function parallaxInit(){$('#counter').parallax("50%",0.3);$('#team-skills').parallax("50%",0.3);$('#twitter-feed').parallax("50%",0.3);$('#testimonial').parallax("50%",0.3);}
$(window).bind("load",function(){parallaxInit()});


    // // 禁用F12
    function click(e) {
    	if (document.all) {
    		if (event.button==2||event.button==3) {
    			alert("有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
    			oncontextmenu='return false';
    		}
    	}
    	if (document.layers) {
    		if (e.which == 3) {
    			oncontextmenu='return false';
    		}
    	}
    };

    if (document.layers) {
    	document.captureEvents(Event.MOUSEDOWN);
    }
    document.onmousedown=click;
    document.oncontextmenu = new Function("return false;");
    document.onkeydown =document.onkeyup = document.onkeypress=function(){
    	if(window.event.keyCode == 123) {
    		window.event.returnValue=false;
    		return(false);
    	}
    }
