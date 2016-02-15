/**
* Created by lennartquerter on 15/02/16.
*/

var start = [0,0];
var minH = 0;
var maxH = 16;
var minW = 0;
var maxW = 16;

app.controller('myCtrl', function($scope) {

<<<<<<< HEAD
  $scope.keyBuffer = [];
  $scope.down = function(e) {

    $scope.keyBuffer.push(e.keyCode);

    if (event.which == 37 && start[0] > 0) {
      console.log("left");
      start[0] -= 1;
      console.log(start);
      event.preventDefault();
    } else if (event.which == 38 && start[1] < 16) {
      console.log("up");
      start[1] += 1;
      console.log(start);
      event.preventDefault();
    } else if (event.which == 39 && start[0] < 16) {
      console.log("right");
      start[0] += 1;
      console.log(start);
      event.preventDefault();
    } else if (event.which == 40 && start[1] > 0) {

      console.log("down");
      start[1] -= 1;
      console.log(start);
      event.preventDefault();
    }
  }

=======
  $scope.createGrid = function() {
      for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
          $(".grid-container").append("<div class='cell " + x + "-" + y + "'>z</div>");
        }
      }
  };
>>>>>>> master
});
