// var figure = $(".video").hover( hoverVideo, hideVideo );

// function hoverVideo(e) {  
//     $('video', this).get(0).play(); 
// }

// function hideVideo(e) {
//     $('video', this).get(0).pause(); 
// }

const VideoController = function(isHovering, videoElement)
{
	if (isHovering == true)
    {
        videoElement.play();
    }
    else if (isHovering == false)
    {
        videoElement.pause();
    }
}