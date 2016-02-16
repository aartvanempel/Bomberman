app.controller('gridCtrl', function($scope) {

  $scope.createGrid = function() {
      for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
          $(".grid-container").append("<div class='cell " + x + "-" + y + "'></div>");
        }
      }
  };

});
