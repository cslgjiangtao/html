$(function(){
inittop();  
initfocus();
initlist();
});

function inittop(){

  $(".menus li").mouseover(function(){
    $(this).addClass("l");
    $(this).find(".link").find("b").css("background-position", "-231px -18px");
     $(this).find("ul").find("li").stop().animate({"height":"33px"},500);
  });

   $(".menus li").mouseout(function(){
    $(this).removeClass("l");
    $(this).find(".link").find("b").css("background-position", "-223px -18px");
     $(this).find("ul").find("li").stop().animate({"height":"0px"},50);
  });

}




   var i=1;
function initfocus(){
	
	$(".index_focus_next").click(function(){
       i++;
        if (i==11) {i=1;};
       $(".index_focus li").hide();
       $(".focus_info").hide();
       $(".focus_info h3").hide();
       $(".focus_info p").hide();
       $("#focusli" + i).fadeIn(1000)
       $("#focus_info" + i).fadeIn(function(){
	   	 	 $("#focus_info" + i +" h3").fadeIn(function(){
	   	 	 	$("#focus_info" + i + " P").fadeIn();
	   	 	 });
	   	 });
        $(".goto").removeClass("gotoin");
        $("#g"+i).addClass("gotoin")

      
	});

	$(".index_focus_pre").click(function(){
       i--;
        if (i==0) {i=10;};
       $(".index_focus li").hide();
       $(".focus_info").hide();
       $(".focus_info h3").hide();
       $(".focus_info p").hide();
       $("#focusli" + i).fadeIn(1000)
       $("#focus_info" + i).fadeIn(function(){
	   	 	 $("#focus_info" + i +" h3").fadeIn(function(){
	   	 	 	$("#focus_info" + i + " P").fadeIn();
	   	 	 });
	   	 });
      
       $(".goto").removeClass("gotoin");
        $("#g"+i).addClass("gotoin")
	});

	$(".goto").click(function(){
		$(".goto").removeClass("gotoin");
        $(this).addClass("gotoin");
        i = $(this).attr("dtindex");
       $(".index_focus li").hide();
       $(".focus_info").hide();
       $(".focus_info h3").hide();
       $(".focus_info p").hide();
       $("#focusli" + i).fadeIn(1000)
       $("#focus_info" + i).fadeIn(function(){
	   	 	 $("#focus_info" + i +" h3").fadeIn(function(){
	   	 	 	$("#focus_info" + i + " P").fadeIn();
	   	 	 });
	   	 });

	});

 
	
    var timer=setInterval("picshow()",5000);
    $(".index_focus").mouseover(function(){
      clearInterval(timer);
    });
    $(".index_focus").mouseout(function(){
      timer=setInterval("picshow()",5000);
    });

}

function picshow(){
	 i++;
        if (i==11) {i=1;};
       $(".index_focus li").hide();
       $(".focus_info").hide();
       $(".focus_info h3").hide();
       $(".focus_info p").hide();
       $("#focusli" + i).fadeIn(1000)
       $("#focus_info" + i).fadeIn(function(){
	   	 	 $("#focus_info" + i +" h3").fadeIn(function(){
	   	 	 	$("#focus_info" + i + " P").fadeIn();
	   	 	 });
	   	 });
        $(".goto").removeClass("gotoin");
        $("#g"+i).addClass("gotoin");
}

function initlist(){
  $(".list_next").click(function(){
     $(this).next(".index_list").find(".index_list_ul").animate({"left":"-1240px"},800);
     $(this).hide();
     $(this).prev(".list_pre").show();
  });
  $(".list_pre").click(function(){
     $(this).parent(".index_box").find(".index_list").find(".index_list_ul").animate({"left":"0px"},800);
     $(this).hide();
     $(this).next(".list_next").show();
  });

  $(".mv_pic").mouseover(function(){
     $(this).find(".pic_info").show();
    $(this).find(".pic_info").stop().animate({"height":"148px"},800);
    $(this).find(".pic_info2").show();
    $(this).find(".pic_info2").stop().animate({"height":"148px"},800);
  });

  $(".mv_pic").mouseout(function(){
    $(this).find(".pic_info").stop().animate({"height":"0px"},800);
     $(this).find(".pic_info").hide();
      $(this).find(".pic_info2").stop().animate({"height":"0px"},800);
     $(this).find(".pic_info2").hide();
  });
 $(".dmv").mouseover(function(){
    $(this).find(".dvp").show();
 });
$(".mv").mouseover(function(){
    $(this).find(".vp").show();
 });
$(".dmv").mouseout(function(){
    $(this).find(".dvp").hide();
 });
$(".mv").mouseout(function(){
    $(this).find(".vp").hide();
 });
}