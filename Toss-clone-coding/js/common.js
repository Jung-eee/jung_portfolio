'use strict'
$(function(){
  $(window).scroll(function(){
      let section = $("section");
      console.log(section);
      section.each(function(){
        console.log($(this).height);
      })
      let winscrTop = $(window).scrollTop();
  });
});
