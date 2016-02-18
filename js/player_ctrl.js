var cellXY = [0,0];
var currentPosition;
var bombStash = 1; // number of bombs player can drop
var flameRange = 1;

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
        setTimeout(bombExplosion, 2000);
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
        var bombPosition = bombXY[0] + "-" + bombXY[1];

        var bombPos = bombXY;

        var bedrockBelow = false;
        var bedrockAbove = false;
        var bedrockLeft = false;
        var bedrockRight = false;

        var rockBelow = false;
        var rockAbove = false;
        var rockLeft = false;
        var rockRight = false;

        for (var i = 0; i < flameRange; i++) {

            //beneden
            if (!bedrockBelow) {
                console.log("down: " + bombPos[0] + " " + (bombPos[1] + i + 1));
                console.log("bedrock false");
                var bombBelow = bombPos[0] + "-" + (bombPos[1] + i + 1);
                if ($("." + bombBelow).hasClass("bedrock")) {
                    console.log("bedrock True");
                    bedrockBelow = true;
                }
                else if ($("." + bombBelow).hasClass("rock")) {
                    if (!rockBelow) {
                        $("." + bombBelow).addClass("flame");
                        dropPowerUp(bombBelow);
                        rockBelow = true;

                    }
                }
                else if ($("." + bombBelow).hasClass("cell")) {
                    $("." + bombBelow).addClass("flame");
                }
            }

            //boven

            if (!bedrockAbove) {
                console.log("up: " + bombPos[0] + " " + (bombPos[1] - i - 1));
                var bombAbove = bombPos[0] + "-" + (bombPos[1] - i - 1);
                console.log("bedrock false");
                if ($("." + bombAbove).hasClass("bedrock")) {
                    console.log("bedrock True");
                    bedrockAbove = true;
                }
                else if ($("." + bombAbove).hasClass("rock")) {
                    if (!rockAbove) {
                        $("." + bombAbove).addClass("flame");
                        dropPowerUp(bombAbove);
                        rockAbove = true;
                    }
                }
                else if ($("." + bombAbove).hasClass("rock") || $("." + bombAbove).hasClass("cell")) {
                    $("." + bombAbove).addClass("flame");
                }
            }

            //links
            if (!bedrockLeft) {

                console.log("Left: " + (bombPos[0] + i + 1) + " " +  bombPos[1]);
                var bombLeft = (bombPos[0] + i + 1) + "-" +  bombPos[1];
                console.log("bedrock false");
                if ($("." + bombLeft).hasClass("bedrock")) {
                    console.log("bedrock True");
                    bedrockLeft = true;
                }
                else if ($("." + bombLeft).hasClass("rock")) {
                    if (!rockLeft) {
                        $("." + bombLeft).addClass("flame");
                        dropPowerUp(bombLeft);
                        rockLeft = true;
                    }
                }
                else if ($("." + bombLeft).hasClass("rock") || $("." + bombLeft).hasClass("cell")) {
                    $("." + bombLeft).addClass("flame");
                }
            }

            //rechts

            if (!bedrockRight) {

                console.log("right: " + (bombPos[0] - i - 1) + " " + bombPos[1]);
                var bombRight = (bombPos[0] - i - 1) + "-" + bombPos[1];
                console.log("bedrock false");
                if ($("." + bombRight).hasClass("bedrock")) {
                    console.log("bedrock True");
                    bedrockRight = true;
                }
                else if ($("." + bombRight).hasClass("rock")) {
                    if (!rockRight) {
                        $("." + bombRight).addClass("flame");
                        dropPowerUp(bombRight);
                        rockRight = true;
                    }
                }
                else if ($("." + bombRight).hasClass("rock") || $("." + bombRight).hasClass("cell")) {
                    $("." + bombRight).addClass("flame");
                }
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
