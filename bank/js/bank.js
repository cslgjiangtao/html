$(function(){
initmain();
});

function initmain(){
	$(".zhuti1main a").mouseover(function(){
		$(this).find(".shine").stop().animate({"left":"0px"},500,function(){
			$(".shine").css("left","-160px");
		});
	});

	$("#z1lm2").click(function(){
		$(this).removeClass("z1lm2");
        $(this).addClass("z1lm1");
        $("#z1lm1").removeClass("z1lm1");
        $("#z1lm1").addClass("z1lm2");
		$("#zhuti1main2").show();
		$("#zhuti1main1").hide();
	});

	$("#z1lm1").click(function(){
		$(this).removeClass("z1lm2");
        $(this).addClass("z1lm1");
        $("#z1lm2").removeClass("z1lm1");
        $("#z1lm2").addClass("z1lm2");
		$("#zhuti1main1").show();
		$("#zhuti1main2").hide();
	});

	$("#tab1").click(function(){
        $(".zt").hide();
        $("#zhuti1").show();
        $("#tabs li").removeClass("t");
        $(this).addClass("t");
	});
	$("#tab2").click(function(){
        $(".zt").hide();
        $("#zhuti2").show();
        $("#tabs li").removeClass("t");
        $(this).addClass("t");
	});
	$("#tab3").click(function(){
        $(".zt").hide();
        $("#zhuti3").show();
        $("#tabs li").removeClass("t");
        $(this).addClass("t");
	});
	$("#tab4").click(function(){
        $(".zt").hide();
        $("#zhuti4").show();
        $("#tabs li").removeClass("t");
        $(this).addClass("t");
	});

	$("#tab21").click(function(){
        $("#wangyin2").hide();
        $("#wangyin1").show();
        $("#tabs2 li").removeClass("t");
        $(this).addClass("t");
	});
	$("#tab22").click(function(){
         $("#wangyin1").hide();
        $("#wangyin2").show();
        $("#tabs2 li").removeClass("t");
        $(this).addClass("t");
	});

	setInterval("picshow()",3000);
}
  var i=1;
function picshow(){
   i++;
   $(".ggimg").hide();
   var n=i%3;
   if (n==0) { $("#g"+i).show("slow");};
   if (n==1) { $("#g"+i).fadeIn();};
   if (n==2) { $("#g"+i).slideDown();};
   if (i==10) {i=0;};
}