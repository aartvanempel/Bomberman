var start = [0,0];
var currentPosition;

app.controller('playerCtrl', function($scope) {

  $scope.keyBuffer = [];
  $scope.down = function(e) {

    $scope.keyBuffer.push(e.keyCode);

    if (event.which == 38 && start[0] > 0) {
      console.log("up");
      start[0] -= 1;
      event.preventDefault();
    } if (event.which == 39 && start[1] < 15) {
      console.log("right");
      start[1] += 1;
      event.preventDefault();
    } if (event.which == 40 && start[0] < 15) {
      console.log("right");
      start[0] += 1;
      event.preventDefault();
    } if (event.which == 37 && start[1] > 0) {
      console.log("left");
      start[1] -= 1;
      event.preventDefault();
    }

    // add class to current cell
    currentPosition = start[0] + "-" + start[1];
    console.log(currentPosition);
    $(".cell").removeClass("current-cell");
    $("." + currentPosition).addClass("current-cell");
  };
});