Cufon.replace('h4');
Cufon.replace('a');
Cufon.now();

var currentState = 'home';

var app = {
	
	closeBubble: function(){
		$('#bubble').fadeOut();
	},
	
	showBubble: function(section){
		$('#bubble').fadeIn();
	},
	
	
	loadProductList: function() 
	{
		
		$('#content-container').hide();
		
		$('#content-container').load("/list", function ()
		{
			$(this).fadeIn(500);

		});
	},
	
	
	loadProduct: function(prodID) {
		currentState = 'productDetail';
		$('#feature-img').fadeOut("fast", function() {
			$('#products').fadeOut(500, function() {
				$('#content-container').load("/show/" + prodID);
			})
		});
	},
	
	setupAjaxCallbacks: function() {
		
		$('body').ajaxStart(function() {
			$('#ajax-status').show();
		});
		
		$('body').ajaxStop(function() {
			$('#ajax-status').fadeOut();
			app.updateState();
		});
		
		$('body').ajaxError(function(event, xhr, ajaxOptions, thrownError) {

		});
	},
	
	updateState: function() {
		if ( currentState == 'productDetail')
		{
			$('#product-window').animate(
				{ top: '+=485px'}, 500, function() {
			  		// Animation complete.
			});
		}
	},
	
	closeProduct: function(){
		$('#product-window').animate(
			{ top: '-=1000px'}, 500, function() {
		  		// Animation complete.
					app.loadProductList();
		});
	}
	
};



$(document).ready(function(){
	$('#bubble').hide();
	app.loadProductList();
	app.setupAjaxCallbacks();	
});
