Cufon.replace('h4');
Cufon.replace('a');
Cufon.now();

var currentState = 'home';
var app = {
	
	closeBubble: function()
	{
		$('#bubble').fadeOut();
	},
	
	showBubble: function(section)
	{
		$('#bubble').fadeIn();
		
		switch(section)
		{
			case 'zwear':
				$('#sub-text').text("Welcome to Z Wear. Here is a brief description of our company.");
				break;
			case 'lookbook':
				$('#sub-text').html("Click <a href='/pdfs/Z2Wear-The eLite Collection F2010 Look Book.pdf'>here</a> to download our Fall 2010 look book. ");
				break;
			case 'contact':
				$('#sub-text').html("You may reach contact us <a href='mailto:contact@z2wear.com'>here</a>.");
				break;
		}
	},
	
	
	loadProductList: function() 
	{
		
		$('#content-container').hide();
		
		$('#content-container').load("/list", function ()
		{
			$(this).fadeIn(500);
		});
	},
	
	
	loadProduct: function(prodID) 
	{
		currentState = 'productDetail';
		$('#feature-img').fadeOut("fast", function() 
		{
			$('#products').fadeOut(500, function() 
			{
				$('#content-container').load("/show/" + prodID);
			})
		});
	},
	
	setupAjaxCallbacks: function() 
	{
		
		$('body').ajaxStart(function() 
		{
			$('#ajax-status').show();
		});
		
		$('body').ajaxStop(function() 
		{
			$('#ajax-status').fadeOut();
			app.updateState();
			Cufon.refresh();
		});
		
		$('body').ajaxError(function(event, xhr, ajaxOptions, thrownError) 
		{
		});
	},
	
	updateState: function() 
	{
		//$('title').text('Product Detail');
		
		if ( currentState == 'productDetail')
		{
			$('#product-window').animate(
				{ top: '+=485px'}, 500, function() {/*Animation complete.*/});
				
				
			$('.denim').click( function(e){
					app.showDetailImg('denim');
			});
			
			$('.normal').click(function(e) {
				app.showDetailImg('default');
			})
		}
	},
	
	closeProduct: function(){
		$('#product-window').animate(
			{ top: '-=1000px'}, 500, function() 
			{
		  		// Animation complete.
					app.loadProductList();
		});
	},
	
	showDetailImg:function(img) {
		
		$(".productImg").remove();
		switch(img)
		{
			case 'denim':
				// denim
				$("#product-window").append("Denim");
				break;
			case 'shark':
				// shark
				break;
			case 'default':
				// default
				$("#product-window").append('<img class="productImg" src="/products/sayyes_large.jpg">');
				break;
		}		
	},
	
	showSizeChart:function() {
		window.open("/size_chart", "Size Chart", "menubar=no, width=500, height=350, toolbar=no");
	}
	
};

$(document).ready(function()
{	
	 $('#bubble').hide();
	 app.loadProductList();
	 app.setupAjaxCallbacks();	
	
});
