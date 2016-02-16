var start = [0,0];
var currentPosition;

app.controller('playerCtrl', function($scope) {

  $scope.keyBuffer = [];
  $scope.down = function(e) {

    $scope.keyBuffer.push(e.keyCode);

    // move up
    if (event.which == 38 && start[1] > 0) {
      event.preventDefault();
      var positionAboveCurrent = $("." + start[0] + "-" + (start[1]-1));
      if (positionAboveCurrent.hasClass("bedrock") ||
          positionAboveCurrent.hasClass("bomb")) {
        start[1] = start[1];
        console.log("boven u ligt een object");
      } else {
      start[1] -= 1;
      }
    }
    // move down
    if (event.which == 40 && start[1] < 14) {
      event.preventDefault();
      var positionUnderCurrent = $("." + start[0] + "-" + (start[1]+1));
      if (positionUnderCurrent.hasClass("bedrock") ||
          positionUnderCurrent.hasClass("bomb")) {
        start[1] = start[1];
        console.log("onder u ligt een object");
      } else {
      start[1] += 1;
      }
    }
    // move right
    if (event.which == 39 && start[0] < 14) {
      event.preventDefault();
      var positionRightFromCurrent = $("." + (start[0]+1) + "-" + start[1]);
      if (positionRightFromCurrent.hasClass("bedrock") ||
          positionRightFromCurrent.hasClass("bomb")) {
        start[0] = start[0];
        console.log("rechts van u ligt een object");
      } else {
      start[0] += 1;
      }
    }
    // move left
    if (event.which == 37 && start[0] > 0) {
      event.preventDefault();
      var positionLeftFromCurrent = $("." + (start[0]-1) + "-" + start[1]);
      if (positionLeftFromCurrent.hasClass("bedrock") ||
          positionLeftFromCurrent.hasClass("bomb")) {
        start[0] = start[0];
        console.log("links van u ligt een object");
      } else {
      start[0] -= 1;
      }
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
