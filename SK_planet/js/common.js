$(function(){
  console.log($("body"));
  console.log($(location).attr("href"));
  /* lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  해당 메뉴에 onclsas준비*/
   // let href = $("#lnb ul li a");
   // let sl = $(location).attr("href").split("/");
   // let slLeng = sl.length - 1 ;
   // href.each(function(){
   //   let co = $(this).attr("href").split("/");
   //   let coLeng = co.length - 1;
   //   if ( sl[slLeng] == co[coLeng]) {
   //     $(this).addClass("on");
   //   }
   // })
   // let currenthref = $(location).attr("href").split("/");
   // currenthref = currenthref[currenthref.length - 1].split(".");
   let currenthref = re($(location));
   $("#lnb a").each(function(){
     // let matchHref = $(this).attr("href").split("/");
     // matchHref = matchHref[matchHref.length-1].split(".");
     let matchHref =  re($(this));
     // console.log(matchHref);
     if (matchHref == currenthref) {
       $(this).addClass("on");
     }
   })
   function re (plus) {
     let href = plus.attr("href").split("/");
     href = href[href.length - 1].split(".");
     return href;
   }

   $("dd:not(:first)").css({
     "display":"none", "height": 0
   })
   $("dl dt").click(function(){
     let thisElem = $(this);
     console.log(thisElem);
     if ($("+dd",thisElem).css("display")=="none") {
       $("dd").each(function(){
        if ($(this).css("display") == "block") {
          $(this).animate({height:0},"slow",function(){
            $(this).css("display","none");
          })
        }
       })
       $("+dd",thisElem).css("display","block").animate({height: 300},'slow');
     }
   });
});
