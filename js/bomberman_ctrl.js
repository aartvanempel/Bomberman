/**
* Created by lennartquerter on 15/02/16.
*/



app.controller('myCtrl', function($scope) {

  $scope.createGrid = function() {
      for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
          $(".grid-container").append("<div class='cell " + x + "-" + y + "'>z</div>");
        }
      }
  };
});
