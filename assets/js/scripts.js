$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(document).ready(function () {
        $("#boton-correo").click(function () {
                   alert("El correo fue enviado correctamente");
                })
              })

$(document).ready(function(){
       $("h3").on("dblclick", "u", function(event){
                  $(event.delegateTarget).css('color', 'red');
                     })
                        });           
              


$(document).ready(function(){
        $(".card-title1").click(function(){
                  $(".card1").toggle("slow");
                });
              });            
$(document).ready(function(){
        $(".card-title2").click(function(){
                  $(".card2").toggle("slow");
                });
              });            
$(document).ready(function(){
        $(".card-title3").click(function(){
                  $(".card3").toggle("slow");
                });
              });   
        $(".show1").click(function(){
            $(".card1,.card2,.card3").show();
  });