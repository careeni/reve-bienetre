// JavaScript Document


 $(document).ready(function(){
							
							
	$('#home').hide().fadeIn(2000);	
	//$('#page').hide().fadeIn(2000);	
	//$('.main-text .content').hide().fadeIn(1000);	
	//$('#products').hide().fadeIn(1000);	
   // Your code here
   var currentYear = (new Date).getFullYear();
   $("#getYear").text( (new Date).getFullYear() );
   
   $(".presse h3").click(function(){
		$(this).toggleClass('active');
		//$(this).addClass('active');
		$(this).next(".toggle-content").slideToggle();
		//$(this).next(".toggle-content").slideDown();
	});
});
 
 

