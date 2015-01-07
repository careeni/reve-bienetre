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
	
	init_nbProduits();	
	
	
	/*$(".produits-sous-nav a").click(function(){
		$(".produits").hide();
		var el = $(this).attr('class');
		$('.liste-produits'+' .'+el).hide().fadeIn();
		return false;
	});
	
	
	$(".produits-gommages-raffermissant").click(function(){
		var nb_item= $("li.produits-gommages-raffermissant").length;	
		$("#nbItem_corps").text(nb_item);
	});
	$(".produits-huiles").click(function(){
		var nb_item= $("li.produits-huiles").length;	
		$("#nbItem_corps").text(nb_item);
	});
	$(".produits-baumes-beurres").click(function(){
		var nb_item= $("li.produits-baumes-beurres").length;	
		$("#nbItem_corps").text(nb_item);
	});
	$(".produits-corps").click(function(){
		init_nbProduits();
	});*/
	
	
});

function init_nbProduits() {
	var nb_item= $(".produits").length;	
	$("#nbItem_corps").text(nb_item);
	/*$('.liste-produits .produits').hide().fadeIn();*/
}
 
 

