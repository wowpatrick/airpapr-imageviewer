/* Author:
	Simple Image viewer
	Patrick Dorrington
	2012-05-29
*/
$(document).ready(function(){

	$('#preview').click(function() {
		imagePostition($('#original'));
	});
	
	// TODO:
	// - Window resize
	// - load form link
	
	$(window).resize(function() {
		//imagePostition($('#original'));
	}); 
	
	function imagePostition(img) {
		
		/* hide the original image */
		
		//$(this).animate({opacity: 0}, 100)
		//$(this).hide()
		
		// Resize the image to the window width
		// http://stackoverflow.com/questions/1143517/jquery-resizing-image
		
        var maxWidth = $(window).width();	// window width
        var maxHeight = $(window).height(); // window height
        var imgWidth = img.width();			// image width
        var imgHeight = img.height();		// image height
        var ratio = 0;						// resize ration
        var topPosition = 0;
        var leftPostition = 0;
       
        // calculate image dimension
        
        if(imgWidth > maxWidth){
            ratio = imgHeight / imgWidth;
            var imgWidth = maxWidth;
            var imgHeight = (maxWidth * ratio);
            
            
        }
        else if(imgHeight > maxHeight) {
        	ratio = imgWidth / imgHeight;
            var imgWidth = (maxHeight * ratio);
            var imgHeight = maxHeight;
        } 
        
        // calculate image position
        
        // check if the window is larger than the image
        // y position
        if(maxHeight > imgHeight) {
        	topPosition = (maxHeight / 2) - (imgHeight / 2);
        }
        // x position
        if(maxWidth > imgWidth) {
	        leftPostition = (maxWidth / 2) - (imgWidth / 2);
        }

        
        img.css("top", topPosition);
        img.css("left", leftPostition);
        
        // set image width and height
        img.attr('width', imgWidth);
        img.attr('height', imgHeight);  

        // add backdrop
	    $('body').prepend('<div id="backdrop"></div>');
	    // set backdrop size
	    $("#backdrop").css("width", maxWidth);
	    $("#backdrop").css("height", maxHeight);
	    
	    // reveal image
		$('#original').animate({opacity: 1}, 100)
		$('#original').show()
	
	};
	
	$('#original').click(function() {
		$(this).animate({opacity: 0}, 100)
		$(this).hide()
		$('#preview').animate({opacity: 1}, 100)
		$('#preview').show()
		
		$("#backdrop").remove();
	});
	   
});

