/* Author:
	Simple Image viewer
	Patrick Dorrington
	2012-05-29
*/
$(document).ready(function(){

	$('#preview').click(function() {
		
		/* hide the original image */
		
		//$(this).animate({opacity: 0}, 100)
		//$(this).hide()
		
		// Resize the image to the window width
		// http://stackoverflow.com/questions/1143517/jquery-resizing-image
		
		var img = $('#original')			// image to display
        var maxWidth = $(window).width();	// window width
        var maxHeight = $(window).height(); // window height
        var imgWidth = img.width();			// image width
        var imgHeight = img.height();		// image height
        var ratio = 0;						// resize ration
       
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
        
        // set image width and height
        img.attr('width', imgWidth);
        img.attr('height', imgHeight);   
        
        // calculate image position
        
        // check if the window is larger than the image
        // y position
        if(maxHeight > imgHeight) {
        	img.css("top", (maxHeight / 2) - (imgHeight / 2));
        }
        else {
	        img.css("top", "0");
        }
        // x position
        if(maxWidth > imgWidth) {
	        img.css("left", (maxWidth / 2) - (imgWidth / 2));
        }
        else {
	        img.css("left", "0");
        }

        // add backdrop
	    $('body').prepend('<div id="backdrop"></div>');
	    // set backdrop size
	    $("#backdrop").css("width", maxWidth);
	    $("#backdrop").css("height", maxHeight);
	    
	    // reveal image
		$('#original').animate({opacity: 1}, 100)
		$('#original').show()
	
	});
	
	$('#original').click(function() {
		$(this).animate({opacity: 0}, 100)
		$(this).hide()
		$('#preview').animate({opacity: 1}, 100)
		$('#preview').show()
		
		$("#backdrop").remove();
	});
	
	$(window).resize(function() {
	  $('#log').append('<div>Handler for .resize() called.</div>');
	});    
});

