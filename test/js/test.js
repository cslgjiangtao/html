$(function(){
	initEvents();
	initbq();
  initejbq();
  inithd();

  $("#divui").dialog();
});

function initEvents(){
	$(window).scroll(function(){
		$("#content").css("top", ($(this).scrollTop() + 80) + "px");
    $("#hd_on").css("top", ($(this).scrollTop() + 0) + "px");
	});

    $("#hd").mouseover(function(){
    	 var openflag = $(this).attr("openf");
    	 if (openflag == "no") {
         $("#hd").css({"background-position" :"-148px 0","border-color":"#5aa5d4"});
        }
    });

    $("#hd").mouseout(function(){
    	 var openflag = $(this).attr("openf");
    	 if (openflag == "no") {
         $("#hd").css({"background-position" :"-48px 0","border-color":"#a0a5aa"});
        }
    });

	$("#hd").click(function(){
       var openflag = $(this).attr("openf");
       if (openflag == "no") {
        $("#hd").attr("openf","yes");
       	$("#hd").css({"background-position" :"-148px 0","border-color":"#5aa5d4"});
       		$("#content").animate({left:0},500,function(){
       			$("#hd").css({"background-position" :"-98px 0","border-color":"#5aa5d4"});
       		});
       	}else{
             $(".e").hide();
             $(".d").attr("opene","no");
       	     $("#content").animate({left:-187},500,function(){
       			$("#hd").css({"background-position" :"-48px 0","border-color":"#a0a5aa"});
       			$("#hd").attr("openf","no");
       		});
       	}
	});

}

function initbq(){
	$(".b").click(function(){
      $(".e").hide();
      $(".d").attr("opene","no");
	 var showflag = $(this).attr("showf");
	 $(".c").hide();
	 $(".b").attr("showf","no");
	 if (showflag == "no") {
      $(this).next(".c").show("slow");
      $(this).attr("showf","yes");
      }
      else{
      	$(this).next(".c").hide();
      	$(this).attr("showf","no");
      }
	});
}

function initejbq(){
  $(".d").click(function(){
    var opene = $(this).attr("opene");
    $(".e").hide();
    $(".d").attr("opene","no");
    if (opene=="no") {
      $(this).next(".e").show("slow")
      $(this).attr("opene","yes");
    }else{
      $(this).next(".e").hide();
      $(this).attr("opene","no");
    }
  });
  $("#content").mouseleave(function(){
      $(".e").hide();
      $(".d").attr("opene","no");
  });
}

function inithd(){
  $(".hdli").mouseover(function(){
        $(this).find(".hdp").show();
        $(this).css("background-color","#5aa5d4");
        $(this).find(".hda").css("color","#fff");
  });

  $(".hdli").mouseout(function(){
    $(".hdp").hide();
    $(this).css("background-color","#79b6dc");
     $(".hda").css("color","#f5f5f5");
  });

  $("#h1").click(function(){
     $(".cc").hide();
     $("#c1").show();
  });

  $("#h2").click(function(){
     $(".cc").hide();
     $("#c2").show();
  });

  $("#h3").click(function(){
     $(".cc").hide();
     $("#c3").show();
  });
}