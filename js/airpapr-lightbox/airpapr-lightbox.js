/* 
 * 2012-06-07
 * airpapr lightbox
 * by Patrick Dorrington
 */

/*
 * TODO:
 * Add image resizing if window is enlarged
 */

function AirpaprLightboxOpen(imgLink) {
    
    // Get the link to the image we want to display
    var imgPaht = $(imgLink).attr('href');
    
    // We use the .load() function here to make sure
    // that we append the image *after* it is loaded
    $('<img class="airpapr-imageviewer" src="'+ imgPaht +'">').load(function() {
        
        $(this).appendTo('body');

        // Add the image to the DOM
        //$('<img src="'+ imgPaht +'" class="airpapr-imageviewer">').appendTo('body');

        // Add backdrop
        $('body').prepend('<div id="backdrop"></div>');

        AirpaprLightboxResize();

        // reveal image
        $(this).show()
        $(this).animate({
            opacity: 1
        }, 100)
    
    });

};

function AirpaprLightboxClose() {
    // Remove the image
    $('.airpapr-imageviewer').animate({
        opacity: 0
    }, 100)
    $('.airpapr-imageviewer').remove();

    // Remove the backdrop
    $("#backdrop").remove();
}

function AirpaprLightboxResize() {
    
    var img = $('.airpapr-imageviewer');
    
    // Resize the image to the window width
    // http://stackoverflow.com/questions/1143517/jquery-resizing-image

    var maxWidth = $(window).width();		// window width
    var maxHeight = $(window).height();     // window height
    var imgWidth = img.width();				// image width
    var imgHeight = img.height();           // image height
    var ratio = 0;							// resize ration
    var topPosition = 0;                    // top image position
    var leftPostition = 0;                  // left image postiton

    // calculate image dimension
    if (imgWidth > maxWidth || imgHeight > maxHeight) {
        if (imgWidth > imgHeight) {
            ratio = imgHeight / imgWidth;
            imgWidth = maxWidth;
            imgHeight = (maxWidth * ratio);
        }
        else {
            ratio = imgWidth / imgHeight;
            imgWidth = (maxHeight * ratio);
            imgHeight = maxHeight;
        }
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

    // Set backdrop size
    $("#backdrop").css("width", maxWidth);
    $("#backdrop").css("height", maxHeight);
}
