/*global $, alert, consol*/

$(function () {
	
	'use strict';
	
	// Trigger Nice Scroll
	
	$('html').niceScroll({
		
		cursorcolor: '#f7600e',
		
		cursorwidth: 5,
		
		cursorborderradius: 10,
		
		cursorborder: '1px solid #f7600e'
	});
	
	// Change Header Height
	
	$('.header').height($(window).height());
	
	// Resize Header
	
	$(window).resize(function(){
		
		$('.header').height($(window).height());
	});
    
    // Activate Links And Deactivate Other Siblings
    
    $('.header .navbar ul li').click(function () {
        
        $('html, body').animate({
            
            scrollTop : $("#" + $(this).data('scroll')).offset().top
            
        },1000)
                
    });
    
    $('.header .navbar ul li').mouseover(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
	
	// Scroll To Features
	
	$('.header .arrow i').click(function(){
		
		$('html, body').animate({
			
			scrollTop: $('.features').offset().top
			
		},1000);
		
	});
	
	$('.hire').click(function(){
		
		$('html, body').animate({
			
			scrollTop: $('.our-team').offset().top
			
		},1000)		
	});
	
	// Show More Items From Work
	
	$('.show-more').click(function(){
		
		$('.our-work .hidden').fadeIn(1000);
	});
	
	// Check Testimonials
	
	var leftArrow = $('.testim .fa-chevron-left'),
		
		rightArrow = $('.testim .fa-chevron-right');
	
	function checkClientes() {
		
		if ($('.client:first').hasClass('active')) {
			
			leftArrow.fadeOut()
			
		} else {
			
			 leftArrow.fadeIn()
		}
		
		if ($('.client:last').hasClass('active')) {
			
			rightArrow.fadeOut()
			
		} else {
			
			 rightArrow.fadeIn()
		}		
		
	}
	
	checkClientes();
	
	$('.testim i').click(function(){
		
		if ($(this).hasClass('fa-chevron-right')) {
			
			$('.testim .active').fadeOut(100, function(){
				
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				
				checkClientes();
			});
			
		} else {
			
			$('.testim .active').fadeOut(100, function(){
				
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				
				checkClientes();
			});			
		}
		
	});
	
	//
	
});