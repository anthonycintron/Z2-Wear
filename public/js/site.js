Cufon.replace('h4');
Cufon.replace('a');
////////Cufon.now();

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
				$('#sub-text').text("The Z2 wear girl has her own little twinkle before she truly shines! The new Elite Collection takes inspiration from that belief.");
				break;
			case 'lookbook':
				$('#sub-text').html("Click <a href='/pdfs/Z2Wear-The eLite Collection F2010 Look Book.pdf'>here</a> to download our Fall 2010 look book. ");
				break;
			case 'contact':
				$('#sub-text').html("You may contact us <a href='mailto:sales@z2wear.com'>here</a>.");
				break;
		}
	},
	
	
	loadProductList: function() 
	{
		
		$('#content-container').hide();
		
		$('#content-container').load("/list", function ()
		{
			$(this).fadeIn(500);
			$('#mjr_crds').show();
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
			});
			
			$('.shark').click(function(e) {
				app.showDetailImg('shark');
			});
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
				$("#product-window").append('<img class="productImg" src="/products/denim.jpg">');
				break;
			case 'shark':
				// shark
				$("#product-window").append('<img class="productImg" src="/products/shark.jpg">');
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
	 Cufon.now();
	 $('#bubble').hide();
	 app.loadProductList();
	 app.setupAjaxCallbacks();	
	
});
