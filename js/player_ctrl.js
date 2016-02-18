var cellXY = [0,0];
var currentPosition;
var bombStash = 10; // number of bombs player can drop

hangmanApp.controller('playerCtrl', function($scope) {

  $scope.keyBuffer = [];
  $scope.down = function(e) {

    $scope.keyBuffer.push(e.keyCode);

    // move up
    if (event.which == 38 && cellXY[1] > 0) {
      event.preventDefault();
      var $positionAboveCurrent = $("." + cellXY[0] + "-" + (cellXY[1]-1));
      if ($positionAboveCurrent.hasClass("bedrock") ||
          $positionAboveCurrent.hasClass("bomb") ||
          $positionAboveCurrent.hasClass("rock")) {
        cellXY[1] = cellXY[1];
        console.log("boven u ligt een object");
      } else {
      cellXY[1] -= 1;
      }
    }
    // move down
    if (event.which == 40 && cellXY[1] < 14) {
      event.preventDefault();
      var $positionBelowCurrent = $("." + cellXY[0] + "-" + (cellXY[1]+1));
      if ($positionBelowCurrent.hasClass("bedrock") ||
          $positionBelowCurrent.hasClass("bomb") ||
          $positionBelowCurrent.hasClass("rock")) {
        cellXY[1] = cellXY[1];
        console.log("onder u ligt een object");
      } else {
      cellXY[1] += 1;
      }
    }
    // move right
    if (event.which == 39 && cellXY[0] < 14) {
      event.preventDefault();
      var $positionRightFromCurrent = $("." + (cellXY[0]+1) + "-" + cellXY[1]);
      if ($positionRightFromCurrent.hasClass("bedrock") ||
          $positionRightFromCurrent.hasClass("bomb") ||
          $positionRightFromCurrent.hasClass("rock")) {
        cellXY[0] = cellXY[0];
        console.log("rechts van u ligt een object");
      } else {
      cellXY[0] += 1;
      }
    }
    // move left
    if (event.which == 37 && cellXY[0] > 0) {
      event.preventDefault();
      var $positionLeftFromCurrent = $("." + (cellXY[0]-1) + "-" + cellXY[1]);
      if ($positionLeftFromCurrent.hasClass("bedrock") ||
          $positionLeftFromCurrent.hasClass("bomb") ||
          $positionLeftFromCurrent.hasClass("rock")) {
        cellXY[0] = cellXY[0];
        console.log("links van u ligt een object");
      } else {
      cellXY[0] -= 1;
      }
    }

    // drop a bomb with the space bar
    if (event.which == 32) {
      event.preventDefault();
      // number of bombs you can drop (default number is 1)
      if ($(".bomb").length < bombStash) {
        $("." + currentPosition).addClass("bomb");
        var bombXY = [cellXY[0], cellXY[1]];
        // bomb explodes after 3 seconds
        setTimeout(bombExplosion, 3000);
      }
    }

    /////////////////
    //Player movement
    /////////////////
    // show player on current cell
    currentPosition = cellXY[0] + "-" + cellXY[1];
    console.log(currentPosition);
    $(".cell").removeClass("current-cell");
    $("." + currentPosition).addClass("current-cell");

    //powerup if player gets the powerup cell
    if ($(".current-cell").hasClass("powerup")) {
      if (flameRange < 4) {
        $(".current-cell").removeClass("powerup");
        flameRange++;
      }
    }

    if ($(".current-cell").hasClass("bombupgrade")) {
      if (bombStash < 4) {
        $(".current-cell").removeClass("bombupgrade");
        bombStash++;
      }
    }

    /////////////////
    //bomb explosion
    /////////////////

    function bombExplosion() {
      var flameRangeXLeft = 3;
      var flameRangeXRight = 3;
      var flameRangeYUp = 3;
      var flameRangeYDown = 3;
      var bombPosition = bombXY[0] + "-" + bombXY[1];
      var positionAboveBomb = bombXY[0] + "-" + (bombXY[1]-1);
      var positionBelowBomb = bombXY[0] + "-" + (bombXY[1]+1);
      var positionLeftFromBomb = (bombXY[0]-1) + "-" + bombXY[1];
      var positionRightFromBomb = (bombXY[0]+1) + "-" + bombXY[1];

      // flames XLeft
      var flameCounterXLeft = 1;
      for (var i = 0; i < flameRangeXLeft; i++) {
        if (!$("." + (bombXY[0]-flameCounterXLeft) + "-" + bombXY[1]).is(".bedrock, .rock, .bomb")) {
          $("." + (bombXY[0]-flameCounterXLeft) + "-" + bombXY[1]).addClass("flame");
          flameCounterXLeft++;
        } else {
          $("." + positionLeftFromBomb).addClass("flame");
        }
      }

      // flames XRight
      var flameCounterXRight = 1;
      for (var i = 0; i < flameRangeXRight; i++) {
        if (!$("." + (bombXY[0]+flameCounterXRight) + "-" + bombXY[1]).is(".bedrock, .rock, .bomb")) {
          $("." + (bombXY[0]+flameCounterXRight) + "-" + bombXY[1]).addClass("flame");
          flameCounterXRight++;
        } else {
          $("." + positionRightFromBomb).addClass("flame");
        }
      }

      // flames YUp
      var flameCounterYUp = 1;
      for (var i = 0; i < flameRangeYUp; i++) {
        if (!$("." + bombXY[0] + "-" + (bombXY[1]-flameCounterYUp)).is(".bedrock, .rock, .bomb")) {
          $("." + bombXY[0] + "-" + (bombXY[1]-flameCounterYUp)).addClass("flame");
          flameCounterYUp++;
        } else {
          $("." + positionAboveBomb).addClass("flame");
        }
      }

      // flames YDown
      var flameCounterYDown = 1;
      for (var i = 0; i < flameRangeYDown; i++) {
        if (!$("." + bombXY[0] + "-" + (bombXY[1]+flameCounterYDown)).is(".bedrock, .rock, .bomb")) {
          $("." + bombXY[0] + "-" + (bombXY[1]+flameCounterYDown)).addClass("flame");
          flameCounterYDown++;
        } else {
          $("." + positionBelowBomb).addClass("flame");
        }
      }

      // bomb position
      $("." + bombPosition).addClass("flame");
      // destroy rock
      $(".flame").removeClass("rock").addClass("explosion-animation");
      // remove explosion-animation class
      setTimeout(function() {
        $(".explosion-animation").removeClass("explosion-animation");
        $(".flame").removeClass("flame");
      }, 800);
      // remove bomb
      $("." + bombPosition).removeClass("bomb");
      // you're dead
      if (!$(".current-cell").hasClass("bedrock") && $(".current-cell").hasClass("flame")) {
        alert("U bent gestorven door de vlam van een bomexplosie");
      }
    }
  };
});
