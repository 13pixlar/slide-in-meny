jQuery(document).ready(function($) {
	
	// Variabler
	var doc = $(document);
	var preventScrolling = false;
	var eventhandler = function(e) {
	   e.preventDefault();      
	}

	// Lyssna efter orientationchange
	window.addEventListener("orientationchange", function() {
		getWidth();
	}, false);

	// Sätt bredden på menyn beroende på skärmens storlek
	function getWidth(){
		var width = $(window).width();
		width = width * 0.9; // 90%
		$('.mobile-menu .inner').css({
			width: width,
		});	
	}

	// Toggla menyn och förhinda scrolling när den är öppen
	$('.mobile-menu-btn').click(function(e) {
		
		// Bestämm skärmens bredd
		getWidth();

		$('.mobile-menu').toggleClass('open');
		$(this).toggleClass('open');
		if (preventScrolling === false) {
			doc.bind('touchmove', eventhandler);
			preventScrolling = true;
			overSearch.removeClass('hidden');
		}else{
			doc.unbind('touchmove', eventhandler);
			preventScrolling = false;
		}
	});
});