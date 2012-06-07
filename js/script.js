/* Author:
Simple Image viewer
Patrick Dorrington
2012-05-29
*/
$(document).ready(function() {

    // Call the image viewer with the element to load
    $('.pic-link').click(function() {
        AirpaprLightboxOpen(this);
        return false;
    });

    $(window).resize(function() {
        AirpaprLightboxResize();
    });
    
    $('body').on("click", ".airpapr-imageviewer", function() {
        AirpaprLightboxClose();
    });
    
});