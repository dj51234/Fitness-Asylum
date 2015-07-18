$(document).ready(function() {
	$('.side-nav li').mouseenter(function() {
		$('.ion-arrow-left-b', this).css('opacity','1');
	});
	$('.side-nav li').mouseleave(function() {
		$('.ion-arrow-left-b', this).css('opacity','0');
	});
});







