$(function () {
	//事件的委托
    initEleEvent();
    initproc();
   initsearch();
   $("#searchinput").val("");
});

function initsearch(){
    $("#select").mouseover(function(){
        var openflag= $(this).attr("openf");
        if (openflag=="no") {
       $(this).css("background-position","-10px -590px");
        }
    });

    $("#select").mouseout(function(){
        var openflag= $(this).attr("openf");
        if (openflag=="no") {
       $(this).css("background-position","-10px -550px");
        }
    });
     $(document).bind("click",function(e){
     var target  = $(e.target);
      if(target.closest("#search").length == 0){
      $("#select").css("background-position","-10px -590px");
          $("#searchtype").hide();
          $("#select").attr("openf","no");
  }
 })

    $("#select").click(function(){
        var openflag= $(this).attr("openf");
        if (openflag=="no") {
       $(this).css("background-position","-10px -630px");
       $("#searchtype").show("slow");
        $(this).attr("openf","yes");
        }else{
            $(this).css("background-position","-10px -590px");
            $("#searchtype").hide();
            $(this).attr("openf","no");
        }
    });

    $("#searchinput").keydown(function(){
        $("#inner").css("background-position","-80px 0");
    });

    $("#searchinput").keyup(function(){
        var val=$(this).val();
        if (val == "") {
        $("#inner").css("background-position","0 0");
        }else{
         $("#inner").css("background-position","-80px 0");  
        }     
    });
}
function initEleEvent(){
     $(".hdli").mouseover(function(){
     	 var num = $(".hdli").index($(this));
     	  var current = $(".hdul>li").index($(".hover"));
     	  if(current==-1)
     	  {
     	  	current=3;
     	  }
     	  $(".hdul").css("background-position",(99 * num)+"px"+" 0");
         });

      $(".hdul").mouseleave(function(){
      	$(".hdul").css("background-position", "3px 0");
         });
}

function initproc(){
	$(".procmore").mouseover(function(){
        $(".proc").show();
	});

	$(".procmore").mouseleave(function(){
		$(".proc").hide();
	})
}