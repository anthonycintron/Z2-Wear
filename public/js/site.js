Cufon.replace('h4');
Cufon.replace('a');
Cufon.now();

var app = {
	
	loadProductList: function() {
		$('#products').load("/list", function (){
			
		});
	},
	
	
	loadProduct: function(prodID){
		$('#feature-img').hide();
		$('#products').hide();
		$('#content-container').load("/show/" + prodID);	
	},
	
	setupAjaxCallbacks: function() {
		
		$('body').ajaxStart(function() {
			$('#ajax-status').show();

		});
		
		$('body').ajaxStop(function() {
			$('#ajax-status').fadeOut();
		});
		
		$('body').ajaxError(function(event, xhr, ajaxOptions, thrownError) {
			console.log("XHR Response: " + JSON.string(xhr))

		});
	}
	
	
};

$(document).ready(function(){
	app.loadProductList();
	app.setupAjaxCallbacks();
	
});


//animate product box
/*
$('#product-window').animate({
  top: '+=485px'
}, 1000, function() {
  // Animation complete.
});
*/	
