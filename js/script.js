/* Author:
Simple Image viewer
Patrick Dorrington
2012-05-29
*/
$(document).ready(function(){

    // Call the image viewer with the element to load
    $('#preview').click(function() {
        imagePostition($('#original'));
    });

    // TODO:
    // - Window resize
    // - Load form link

    $(window).resize(function() {
        resize($('#original'));
    }); 

    function imagePostition(img) {

        // Resize the image to the window width
        // http://stackoverflow.com/questions/1143517/jquery-resizing-image

        var maxWidth = $(window).width();		// window width
        var maxHeight = $(window).height();     // window height
        var imgWidth = img.width();				// image width
        var imgHeight = img.height();			// image height
        var ratio = 0;							// resize ration
        var topPosition = 0;                    // top image position
        var leftPostition = 0;                  // left image postiton

        // calculate image dimension

        if (imgWidth > maxWidth) {
	        ratio = imgHeight / imgWidth;
	        imgWidth = maxWidth;
	        imgHeight = (maxWidth * ratio);
        }
        else if (imgHeight > maxHeight) {
	        ratio = imgWidth / imgHeight;
	        imgWidth = (maxHeight * ratio);
	        imgHeight = maxHeight;
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

        // Set absolute image position
        img.css("top", topPosition);
        img.css("left", leftPostition);

        // Set image width and height
        img.attr('width', imgWidth);
        img.attr('height', imgHeight);  

        // Add backdrop
        $('body').prepend('<div id="backdrop"></div>');
        
        // Set backdrop size
        $("#backdrop").css("width", maxWidth);
        $("#backdrop").css("height", maxHeight);

        // reveal image
        img.animate({opacity: 1}, 100)
        img.show()

    };

    function resize(img) {

        // Resize the image to the window width
        // http://stackoverflow.com/questions/1143517/jquery-resizing-image

        var maxWidth = $(window).width();		// window width
        var maxHeight = $(window).height();     // window height
        var imgWidth = img.width();				// image width
        var imgHeight = img.height();			// image height
        var ratio = 0;							// resize ration
        var topPosition = 0;                    // top image position
        var leftPostition = 0;                  // left image position

        console.log("Image dimensions: " + imgHeight + " " + imgWidth)

        // calculate image dimension

        if (imgWidth > maxWidth) {
	        ratio = imgHeight / imgWidth;
	        imgWidth = maxWidth;
	        imgHeight = (maxWidth * ratio);
        }
        else if (imgHeight > maxHeight) {
	        ratio = imgWidth / imgHeight;
	        imgWidth = (maxHeight * ratio);
	        imgHeight = maxHeight;
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


        // set backdrop size
        $("#backdrop").css("width", maxWidth);
        $("#backdrop").css("height", maxHeight);

    }

    $('#original').click(function() {
	    $(this).animate({opacity: 0}, 100)
	    $(this).hide()
	    $('#preview').animate({opacity: 1}, 100)
	    $('#preview').show()
	
	    $("#backdrop").remove();
    });

});

