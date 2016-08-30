$(document).ready(function(){
    $("#first").click(function(){
      $("#one").show();
      $("#two").hide();
      $("#three").hide();
      $("#four").hide();
      $("#five").hide();
    });
  
    $("#second").click(function(){
      $("#two").show();
      $("#one").hide();
      $("#three").hide();
      $("#four").hide();
      $("#five").hide();
    });
  
  $("#third").click(function(){
      $("#three").show();
      $("#one").hide();
      $("#two").hide();
      $("#four").hide();
      $("#five").hide();
    });
  
  $("#fourth").click(function(){
      $("#four").show();
      $("#one").hide();
      $("#two").hide();
      $("#three").hide();
      $("#five").hide();
    });
  
  $("#fifth").click(function(){
      $("#five").show();
      $("#one").hide();
      $("#two").hide();
      $("#three").hide();
      $("#four").hide();
    });
});
