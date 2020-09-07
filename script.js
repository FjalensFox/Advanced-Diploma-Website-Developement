$(document).ready(function(){
    $("#search-bar").on("keyup", function() {

      var value = $(this).val().toLowerCase();

      $(".box, .wide-box").filter(function() {

        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

      });

    });
    
  });