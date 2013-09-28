$(function(){
  inithd();
  initcont();
});

function inithd(){
	var iswhite=0;
	$("#searchbtn").click(function(){
       $("#searchdiv").fadeIn(500); 
       $(this).css("color","#fff");
       $(".ahome").css("color","gray");
       iswhite=1;
	});

	$(".ahome").click(function(){
       $("#searchdiv").fadeOut(500); 
       $("#searchbtn").css("color","gray");
       $(".ahome").css("color","#fff");
       iswhite=0;
	});
 
    $(".ahome").mouseover(function(){
    	$(".ahome").css("color","#fff");
      });

     $(".ahome").hover(function(){
     	$(".ahome").css("color","#fff");
     },function(){
     	if (iswhite==1) {
     	$(".ahome").css("color","gray");
     	};
     });

      $("#searchbtn").hover(function(){
      $("#searchbtn").css("color","#fff");
     },function(){
      if (iswhite==0) {
      $("#searchbtn").css("color","gray");
      };
     });
}

function initcont(){
	$("#content").mouseover(function(){
       $("#contleft").show();
       $("#contright").show();
	});

	$("#content").mouseout(function(){
       $("#contleft").hide();
       $("#contright").hide();
	});
          var i=-1366;
          var j=1;
	$("#contleft").click(function(){
    $(".mid").hide();
    j--;
    if (j==0) {j=3};
		if (i==0) {
			i=-4098;
			  $("#picbox").css({left:i});
		};
          i=i+1366;
       $("#picbox").animate({left:i},500,function(){
        $("#mid"+j).show();
       });

	});

	$("#contright").click(function(){
    $(".mid").hide();
     j++;
    if (j==4) {j=1};
		if (i==-5464) {
			i=-1366;
			  $("#picbox").css({left:i});
		};
          i=i-1366;
       $("#picbox").animate({left:i},500,function(){
        $("#mid"+j).show();
       });

	});

  $(".en").mouseover(function(){
     $(this).find(".yy").show();
     $(this).find(".fla").css("background-color","#505050");
     $(this).find(".fla").css("color","#fff");
  });

   $(".en").mouseout(function(){
     $(this).find(".yy").hide();
     $(this).find(".fla").css("background-color","#000");
     $(this).find(".fla").css("color","gray");
  });
}