$(function(){
    initEleEvents();	
});



function initEleEvents(){
	$("#pic").mousemove(function(e){
		$("#pic img").css("display","none");
		var x=e.clientX-($(window).width()-200)/2;
        var y=e.clientY;
        x=x/200*100;
		y=y/120*100;
		
		$("#pic").css("background-position",x+"%" + y+"%");
	})
};
    