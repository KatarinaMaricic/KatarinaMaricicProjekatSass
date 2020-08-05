jQuery(document).ready(function(){
	
	$( ".cross" ).hide();
	$(".hamburger").hide();

	$( ".hamburger" ).click(function() {
		$( ".navbar" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".navbar" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});
	$( ".navbar" ).on("click" , function() {
		$( ".navbar" ).hide();
		$( ".hamburger" ).show();
		$( ".cross" ).hide();
		});

});