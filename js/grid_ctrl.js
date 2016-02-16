app.controller('gridCtrl', function($scope) {





  $scope.createGrid = function() {
    for (var y = 0; y < 15; y++) {
      for (var x = 0; x < 15; x++) {
        if (([1, 3, 5, 7, 9, 11, 13].indexOf(x)) != -1 && ([1, 3, 5, 7, 9, 11, 13].indexOf(y)) != -1) {
          $(".grid-container").append("<div class='bedrock cell " + x + "-" + y + "'></div>");
        } else {
          $(".grid-container").append("<div class='cell " + x + "-" + y + "'></div>");
        }
      }
    }

    //make bedrock items -Class bedrock

    var $notBedrock = $('.cell').not(".bedrock");
    console.log($notBedrock);
    var $bedrock = $(".bedrock");

    $notBedrock.each(function() {

      if ($(this).hasClass("current-cell")) {
        console.log("has Class")
      } else {
        $(this).addClass("rock")
      }



    });







    //vanaf 3-0 && 0-3

    //make random destroyable blocks --class rocks

    //class = rock en dat moet op


    //create random power ups when destroying block (1 kans op 8 per upgrade?)



  };

});



/*
*  1
*  3
*  5
*  7
*  9
*  11
*  13
*  15
*
* */