$(document).ready(function(){
    $(`.hover-icon_360`).mouseenter(function(){ 
      $("img", this).css("top", "0").css("opacity", "1")
      $(".hover-icon_360").css("opacity", ".6")
      $(this).css("opacity", "1")
    });
    $(`.hover-icon_360`).mouseleave(function(){ 
        $("img", this).css("top", "-35%").css("opacity", "0")
        $(".hover-icon_360").css("opacity", "1")
  });
});