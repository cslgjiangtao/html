$(function(){
inithd();
initcont();
initbar();
$("#key").val("");
});

var picleft=0;
var pica=1;
function inithd(){
  $("#fixul li").mouseover(function(){
     $("#fixul li").css("background-color","#fff");
     $(this).css("background-color","#f8f2e2");
  });

  $("#fixul li").mouseout(function(){
  	$("#fixul li").css("background-color","#fff");
     $("#li1").css("background-color","#f8f2e2");
  });

  $(".fli").mouseover(function(){
  	$(this).css("background-image",'url("css/images/bg-dropdown.png")');
    $(this).find(".zuiha").show();
  });

  $(".fli").mouseout(function(){
  	 $(this).css("background-image","none");
     $(this).find(".zuiha").hide();
  });

  $("#key").focus(function(){
    $(this).css("background-image","none");
  });

  $("#key").blur(function(){
    var val=$(this).val();
    if (val == "") {
      $(this).css("background-image",'url("css/images/123.bmp")');
  }
  });
}

function initcont(){
	var i=0;
	$(".jockblock").mouseover(function(){
      $(this).find(".mt-15").find(".bdshare").show();
      $(this).find(".mt-15").find(".toolkit").show();
	});

	$(".jockblock").mouseout(function(){
      $(this).find(".mt-15").find(".bdshare").hide();
      $(this).find(".mt-15").find(".toolkit").hide();
	});



    $(".pinlun").click(function(){
    	var openflag = $(this).attr("openf");
    	 if (openflag == "no") {
         $(this).parent(".fr").parent(".mt-16").next(".mt-17").show();
          $(this).attr("openf","yes");
     }else{
     	 $(this).parent(".fr").parent(".mt-16").next(".mt-17").hide();
          $(this).attr("openf","no");
     }
       });      

  $("#vdown").click(function(){
  	$("#upd").css("background-position", "left -171px")
  	if (i>-2000) {
  		
        i=i-576;
        $(".vdiv").animate({"left" : i},500);
      $(".vdiv").css("left",i + "px");
      if (i<-2000) {
  			$("#downd").css("background-position", "left -255px");
  		}
  }
  });

  $("#vup").click(function(){
  	$("#downd").css("background-position", "left -297px");
  	if (i<-0) {
  		
        i=i+576;
        $(".vdiv").animate({"left" : i},500);
     /* $(".vdiv").css("left",i + "px");*/
      if (i>-576) {

  			$("#upd").css("background-position", "left -213px");
  		}
  }
  });
}

function initbar(){
	$(".hza").mouseover(function(){
    $(".hza").css("background-color","#fff");
    $(this).css("background-color","#f57345");
  });
  $(".hza").mouseout(function(){
    $(".hza").css("background-color","#fff");
    $("#hza1").css("background-color","#f57345");
  });

  $("#hza1").click(function(){ 
     picleft=0;
     pica=1;
    $("#ggbox").animate({left: 0});
  });
   $("#hza2").click(function(){
    picleft=-298;
    pica=2;
    $("#ggbox").animate({"left":"-298px"},500);
  });
    $("#hza3").click(function(){
      picleft=-596;
      pica=3;
    $("#ggbox").animate({"left":"-596px"},500);
  });
     $("#hza4").click(function(){
      picleft=-894;
      pica=4;
    $("#ggbox").animate({"left":"-894px"},500);
  });



setInterval("picshow()",2000);
setInterval("picashow()",2000);


     $(window).scroll(function(){
      if($(this).scrollTop()>700)
      {
        $("#sidebar").css("top", ($(this).scrollTop() - 700) + "px");
        $("#gotop").show();
        $("#gotop").css("top", ($(this).scrollTop() +500) + "px");
      }else{
        $("#sidebar").css("top", "0px");
         $("#gotop").hide();
      }
     });

     $("#gotop").click(function(){
      $("html,body").animate({scrollTop:0},800);
     });
}

function picshow(){
  picleft=picleft-298;
  if (picleft<-1000) {
       picleft=0; 
    }
    $("#ggbox").css({"left": picleft});
 
}

function picashow(){
  pica++;
  if (pica==5) {
       pica=1; 
    }
    $(".hza").css("background-color","#fff");
    $("#hza"+pica).css("background-color","#f57345");
 
}