$(function(){

setInterval("arrow()",500);

initsection1();
initsection2();
initsection3();
initsection4();
initsection5();

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
 

     $(".liimg").mouseover(function(){
      $(this).stop().animate({"width":"105px","height":"105px"},400);
    });

     $(".liimg").mouseout(function(){
      $(this).stop().animate({"width":"90px","height":"90px"},400);
    });
}

function initsection3(){
    $(".cbq").mouseover(function(){
       $(this).stop().animate({"width":"940px"},500);
    });

    $(".cbq").mouseout(function(){
       $(this).stop().animate({"width":"1100px"},500);
    });

   
}

function initsection4(){
  $(".limg").mouseover(function(){
    $(this).css("opacity","1");
    $(this).siblings().css("opacity","0.5");
  });
 
  
}

function initsection5(){
  $("#fbi").mouseover(function(){
    $("#facebook").animate({"left":"-17px","top":"-17px","width":"81px","height":"81px"},200,function(){
      $("#facebook").css({"left":"-2px","top":"-2px","width":"51px","height":"51px"})
    });
  })
}