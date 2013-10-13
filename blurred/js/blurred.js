$(function(){
   inittimes();
   init1();
})

function inittimes(){
   $(document).ready(function(){
        setInterval(showTime, 1000);
        function timer(obj,txt){
                        obj.text(txt);                                
        }        
        function showTime(){  
                var today = new Date();                                                                  
                var y=today.getFullYear();
                var mo=today.getMonth();
                var td=today.getDate();                                                
                var h=today.getHours();
                var m=today.getMinutes();
                var s=today.getSeconds();                
               
                var y1=2014;
                var mo1=1;
                var td1=1;                                                
                var h1=0;
                var m1=0;
                var s1=0;

                var y2=y1-y;
                if (mo<mo1) {
                	var mo2=mo1-mo;
                }else{
                    var mo2=12+mo1-mo;
                	y2--;
                };
                
                if (td<td1) {
                	var td2=td1-td;
                }else{
                    var td2=30+td1-td;
                	mo2--;
                };                                               
                 if (h<h1) {
                	var h2=h1-h;
                }else{
                    var h2=24+h1-h;
                	td2--;
                };
                if (m<m1) {
                	var m2=m1-m;
                }else{
                    var m2=60+m1-m;
                	h2--;
                };
               
                 if (s<=s1) {
                	var s2=s1-s;
                }else{
                    var s2=60+s1-s;
                	m2--;
                };
                    td2=td2+y2*365+mo2*30;  
                timer($("#TD"),td2);        
                timer($("#H"),h2);
                timer($("#M"),m2);
                timer($("#S"),s2);

        }        
   })

}

function init1(){
	$("#socials img").mouseover(function(){
      $(this).css("opacity","1");
	});
	$("#socials img").mouseout(function(){
      $(this).css("opacity","0.4");
	});

	$(".sectionHolder").mouseover(function(){
       $(this).find("img").addClass("c1");
       $(this).find("h3").css("color","#fff");
       $(this).find("p").css("color", "rgb(255, 100, 69)")
	});

	$(".sectionHolder").mouseout(function(){
       $(this).find("img").removeClass("c1");
       $(this).find("h3").css("color","rgb(255, 100, 69)");
       $(this).find("p").css("color", "#fff")
	});

	$(".pica").mouseover(function(){
       $(this).find("span").css("background-image",'url("css/images/+.png")');
       $(this).find("span").stop().animate({"height":"100%"},300);
	});
	$(".pica").mouseout(function(){
       
       $(this).find("span").stop().animate({"height":"3%"},300);
       $(this).find("span").css("background-image","none");
	});

	setInterval("show()",5000);
}
var s=1;
function show(){

	 $("#slide"+s).hide();
	 if (s==3) {s=0};
	s++;
   $("#slide"+s).show();

}