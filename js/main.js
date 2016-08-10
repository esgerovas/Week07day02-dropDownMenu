$(document).ready(function() {
	$(' ul li').hover(function() {
	$(this).children('ul')
	.stop(true,false,true)
	.slideToggle(800);

});
	// $(".nav > li > a").hover(
 //  function () {
 //     $('.dropdown-content').slideDown('medium');
 //  }, 
 //  function () {
 //     $('.dropdown-content').slideUp('medium');
 //  });
	// $('.nav li a')
	// .on('mouseover', function() {
	// 	//$('.nav li a').removeClass('drop')
	// 	$(this).addClass('drop')
	// 	$('.drop + .dropdown-content').slideDown('400')
	// 	$('.drop + .sub-dropdown-content').slideDown('400')
		
	// })

	// $('.dropdown-content')
	// .on('mouseover',function(){
	// 	$(this).show()
	// })

	// $('.sub-dropdown-content')
	// .on('mouseover',function(){
	// 	$(this).show()
	// })

	// $('.dropdown-content')
	// .on('mouseout',function(){
	// 	$(this).slideUp('400')
	// })

	// $('.sub-dropdown-content')
	// .on('mouseout',function(){
	// 	$(this).hide()
	// })
});