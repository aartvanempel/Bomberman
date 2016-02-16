var start = [0,0];
var currentPosition;
var bombPosition;

app.controller('playerCtrl', function($scope) {

  $scope.keyBuffer = [];
  $scope.down = function(e) {

    $scope.keyBuffer.push(e.keyCode);

    // move up
    if (event.which == 38 && start[1] > 0) {
      event.preventDefault();
      var positionAboveCurrent = $("." + start[0] + "-" + (start[1]-1));
      if (positionAboveCurrent.hasClass("bedrock") ||
          positionAboveCurrent.hasClass("bomb") ||
          positionAboveCurrent.hasClass("rock")) {
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
          positionUnderCurrent.hasClass("bomb") ||
          positionUnderCurrent.hasClass("rock")) {
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
          positionRightFromCurrent.hasClass("bomb") ||
          positionRightFromCurrent.hasClass("rock")) {
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
          positionLeftFromCurrent.hasClass("bomb") ||
          positionLeftFromCurrent.hasClass("rock")) {
        start[0] = start[0];
        console.log("links van u ligt een object");
      } else {
      start[0] -= 1;
      }
    }

    // drop a bomb with the space bar
    if (event.which == 32) {
      event.preventDefault();
      $("." + currentPosition).addClass("bomb");
      var bombXY = [start[0], start[1]];
      // bomb explodes after 3 seconds
      setTimeout(bombExplosion, 3000);
    }

    // bomb explosion
    function bombExplosion() {
      bombPosition = bombXY[0] + "-" + bombXY[1];
      var positionAboveBomb = bombXY[0] + "-" + (bombXY[1]-1);
      var positionUnderBomb = bombXY[0] + "-" + (bombXY[1]+1);
      var positionLeftFromBomb = (bombXY[0]-1) + "-" + bombXY[1];
      var positionRightFromBomb = (bombXY[0]+1) + "-" + bombXY[1];
      // rock explosions
      $("." + positionAboveBomb).removeClass("rock");
      $("." + positionUnderBomb).removeClass("rock");
      $("." + positionLeftFromBomb).removeClass("rock");
      $("." + positionRightFromBomb).removeClass("rock");
      // remove bomb
      $("." + bombPosition).removeClass("bomb");
      // when you get hit by the explosion
      if (currentPosition == positionAboveBomb ||
          currentPosition == positionUnderBomb ||
          currentPosition == positionLeftFromBomb ||
          currentPosition == positionRightFromBomb ||
          currentPosition == bombPosition) {
        alert("je bent omgekomen bij een bomexplosie");
      }
    }

    // show player on current cell
    currentPosition = start[0] + "-" + start[1];
    console.log(currentPosition);
    $(".cell").removeClass("current-cell");
    $("." + currentPosition).addClass("current-cell");
  };
});
