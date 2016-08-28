$(document).ready(function(){
   $(".one").bind("click",function(){
     $(".one").css("backgroundColor","red").css("fontSize","1.4em").css("color","#fff").css("height","50px");
     $(".two").css("backgroundColor","gray").css("fontSize","1em").css("color","#000").css("height","30px");
     $(".first li").css("display","block");
     $(".second li").css("display","none");
   });
    $(".two").bind("click",function(){
      $(".two").css("backgroundColor","blue").css("fontSize","1.4em").css("color","#fff").css("height","50px");
      $(".one").css("backgroundColor","gray").css("fontSize","1em").css("color","#000").css("height","30px");
      $(".first li").css("display","none");
      $(".second li").css("display","block");
    });
});
