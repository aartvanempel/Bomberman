var start = [0,0];
var currentPosition;

app.controller('playerCtrl', function($scope) {

  $scope.keyBuffer = [];
  $scope.down = function(e) {

    $scope.keyBuffer.push(e.keyCode);

    // move up
    if (event.which == 38 && start[1] > 0) {
      start[1] -= 1;
      event.preventDefault();
    }
    // move down
    if (event.which == 40 && start[1] < 15) {
      start[1] += 1;
      event.preventDefault();
    }
    // move right
    if (event.which == 39 && start[0] < 15) {
      start[0] += 1;
      event.preventDefault();
    }
    // move left
    if (event.which == 37 && start[0] > 0) {
      start[0] -= 1;
      event.preventDefault();
    }

    // place bomb with space bar
    if (event.which == 32) {
      $("." + currentPosition).addClass("bomb");
      event.preventDefault();
    }

    // add class to current cell
    currentPosition = start[0] + "-" + start[1];
    console.log(currentPosition);
    $(".cell").removeClass("current-cell");
    $("." + currentPosition).addClass("current-cell");
  };
});
