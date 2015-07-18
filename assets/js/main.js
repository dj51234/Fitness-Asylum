$(document).ready(function() {
	$('.side-nav li').mouseenter(function() {
		$('.ion-arrow-left-b', this).css('opacity','1');
		$('a', this).css('color','#14dcff');
	});
	$('.side-nav li').mouseleave(function() {
		$('.ion-arrow-left-b', this).css('opacity','0');
		$('a', this).css('color','#f7f7f7');
	});
});







