$(function () {
	//事件的委托
    inithd();
    initcont();
});

function inithd(){
	$("#navl1").mouseover(function(){
      $(this).find(".navd").css("background-image",'url("css/images/hover_left.png")');
      
	});
	$("#navl1").mouseout(function(){
      $(this).find(".navd").css("background-image",'url("css/images/nav_tab_left.png")');
       
	});

	$("#navl2").mouseover(function(){
      $(this).find(".navd").css("background-image",'url("css/images/hover_1.png")');
      $(this).find(".navhide").show();
	});
	$("#navl2").mouseout(function(){
      $(this).find(".navd").css("background-image",'url("css/images/nav_tab_1.png")');
      $(this).find(".navhide").hide();
	});

	$("#navl3").mouseover(function(){
        $(this).find(".navhide").show();
	});
      
	
	$("#navl3").mouseout(function(){
        $(this).find(".navhide").hide();
	});
      
	

    $("#navl4").mouseover(function(){
      $(this).find(".navd").css("background-image",'url("css/images/hover_3.png")');
       $(this).find(".navhide").show();
	});
	$("#navl4").mouseout(function(){
      $(this).find(".navd").css("background-image",'url("css/images/nav_tab_3.png")');
      $(this).find(".navhide").hide();
	});

	$("#navl5").mouseover(function(){
      $(this).find(".navd").css("background-image",'url("css/images/hover_4.png")');
       $(this).find(".navhide").show();
	});
	$("#navl5").mouseout(function(){
      $(this).find(".navd").css("background-image",'url("css/images/nav_tab_4.png")');
      $(this).find(".navhide").hide();
	});

	$("#navl6").mouseover(function(){
      $(this).find(".navd").css("background-image",'url("css/images/hover_right.png")');
       $(this).find(".navhide").show();
	});
	$("#navl6").mouseout(function(){
      $(this).find(".navd").css("background-image",'url("css/images/nav_tab_right.png")');
      $(this).find(".navhide").hide();
	});

	$(window).scroll(function(){
		$("#fx").css("top", ($(this).scrollTop() + 150) + "px");
    
	});

    $("#fx").mouseover(function(){
       $("#fxright").stop().animate({width:242},500);
    });

     $("#fx").mouseout(function(){
       $("#fxright").stop().animate({width:0},500);
    });

     $("#close").click(function(){
        $("#fx").hide();
     });
	
}

function initcont(){
	var i=0;
	$("#pro_back").click(function(){
       if (i<0) {
		i=i+128;
        $("#pro_ul").animate({left:i})
		};
	});

	$("#pro_next").click(function(){
		if (i>-1100) {
		i=i-128;
       $("#pro_ul").animate({left:i})
       };
	});
}