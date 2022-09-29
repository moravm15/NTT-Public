$(function() {
    $(".plm").on("click", function() {
       $(".plm").toggleClass("fullscreen");
       $(".peo").toggleClass("right");
       $(".aps").toggleClass("left");
       $(".ibp").toggleClass("bottom");
       var x = document.getElementById("plmTextId");
       if (x.style.display === "none") {
            setTimeout(function (){
                x.style.display = "block";
            }, 1000);
            
        } else {
            x.style.display = "none";  
        }
       });
 });

$(function() {
    $(".peo").on("click", function() {
       $(".peo").toggleClass("fullscreen");
       $(".plm").toggleClass("left");
       $(".aps").toggleClass("bottom");
       $(".ibp").toggleClass("right");
       var x = document.getElementById("peoTextId");
       if (x.style.display === "none") {
            setTimeout(function (){
                x.style.display = "block";       
            }, 1000);
            
        } else {
            x.style.display = "none";  
        }
    });
 });

$(function() {
    $(".aps").on("click", function() {
       $(".aps").toggleClass("fullscreen");
       $(".plm").toggleClass("left");
       $(".peo").toggleClass("top");
       $(".ibp").toggleClass("right");
       var x = document.getElementById("apsTextId");
       if (x.style.display === "none") {
            setTimeout(function (){
                x.style.display = "block";       
            }, 1000);
            
        } else {
            x.style.display = "none";  
        }
    });
 });

$(function() {
    $(".ibp").on("click", function() {
       $(".ibp").toggleClass("fullscreen");
       $(".plm").toggleClass("top");
       $(".peo").toggleClass("right");
       $(".aps").toggleClass("left");
       var x = document.getElementById("ibpTextId");
       if (x.style.display === "none") {
            setTimeout(function (){
                x.style.display = "block";       
            }, 1000);
            
        } else {
            x.style.display = "none";  
        }
    });
 });
 
