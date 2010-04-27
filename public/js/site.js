Cufon.replace('h4');
Cufon.replace('a');
Cufon.now();

var app = {
	
	loadProductList: function() {
		$('#products').load("/list");
	},
	
	
	loadProduct: function(prodID){
		$('#feature-img').hide();
		$('#products').hide();
		$('#content-container').load("/show/" + prodID);	
	}
	
	
};

$(document).ready(function(){
	
	app.loadProductList();
	

	
});


//animate product box
/*
$('#product-window').animate({
  top: '+=485px'
}, 1000, function() {
  // Animation complete.
});
*/	
