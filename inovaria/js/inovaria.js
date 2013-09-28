$(function(){

setInterval("arrow()",500);

initsection1();
initsection2();

})

 var num=-1;
function arrow(){
      var n=25 * num + 95;
  $("#arrow").animate({"bottom" : n},500);
  num++;
  if (num==1) {
  	num=-1;
  };
}

function initsection1(){
	$("#section1").mousemove(function(e){
       var x= e.pageX;
       var y= e.pageY;
       
       var sx=(674.5-x)/674.5*35;
       var sy=(356-y)/312*10-60;
       var sy2=(356-y)/312*20-60;

       $("#scene2").css("left",sx);
       $("#scene2").css("top",sy);
       $("#scene3").css("top",sy2);
	});
}

function initsection2(){
    $("#features").mouseover(function(){
      $(".liimg").css("width","80px");
    });
}