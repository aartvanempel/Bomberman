/**
* Created by lennartquerter on 15/02/16.
*/



app.controller('myCtrl', function($scope) {

  $scope.createGrid = function() {
    for(var i = 0; i < 256; i++) {
      $(".grid-container").append("<div class='cell center-center'>z</div>");
    }
  };

});
