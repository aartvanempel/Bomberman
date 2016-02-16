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

    //powerup if player gets the powerup cell
    if ($(".current-cell").hasClass("powerup")) {
      if (playerPowerUp < 5) {
        $(".current-cell").removeClass("powerup");
        console.log(this);
        //this.removeClass("powerup");
        console.log(("powerup"));
        if (playerPowerUp < 5) {
          playerPowerUp++
        }

      }
    }
    //als speler op het vakje komt met class powerup
      // gaat het aantal explosie vakjes met 1tje omhoog

    // bomb explosion
    function bombExplosion() {
      bombPosition = bombXY[0] + "-" + bombXY[1];

      //hier zou nog een powerup systeem moeten komen .. switch case?
      switch(playerPowerUp) {

        case 1:
          console.log("Power Up: 1");
          var positionAboveBomb = bombXY[0] + "-" + (bombXY[1] - 1);
          var positionUnderBomb = bombXY[0] + "-" + (bombXY[1] + 1);
          var positionLeftFromBomb = (bombXY[0] - 1) + "-" + bombXY[1];
          var positionRightFromBomb = (bombXY[0] + 1) + "-" + bombXY[1];
          break;
        case 2:
          console.log("Power Up: 2");
          var positionAboveBomb = bombXY[0] + "-" + (bombXY[1] - 1);
          var positionUnderBomb = bombXY[0] + "-" + (bombXY[1] + 1);
          var positionLeftFromBomb = (bombXY[0] - 1) + "-" + bombXY[1];
          var positionRightFromBomb = (bombXY[0] + 1) + "-" + bombXY[1];
          var positionAboveBomb2 = bombXY[0] + "-" + (bombXY[1] - 2);
          var positionUnderBomb2 = bombXY[0] + "-" + (bombXY[1] + 2);
          var positionLeftFromBomb2 = (bombXY[0] - 2) + "-" + bombXY[1];
          var positionRightFromBomb2 = (bombXY[0] + 2) + "-" + bombXY[1];
          break;
        case 3:
          console.log("Power Up: 3");
          var positionAboveBomb = bombXY[0] + "-" + (bombXY[1] - 1);
          var positionUnderBomb = bombXY[0] + "-" + (bombXY[1] + 1);
          var positionLeftFromBomb = (bombXY[0] - 1) + "-" + bombXY[1];
          var positionRightFromBomb = (bombXY[0] + 1) + "-" + bombXY[1];
          var positionAboveBomb2 = bombXY[0] + "-" + (bombXY[1] - 2);
          var positionUnderBomb2 = bombXY[0] + "-" + (bombXY[1] + 2);
          var positionLeftFromBomb2 = (bombXY[0] - 2) + "-" + bombXY[1];
          var positionRightFromBomb2 = (bombXY[0] + 2) + "-" + bombXY[1];
          var positionAboveBomb3 = bombXY[0] + "-" + (bombXY[1] - 3);
          var positionUnderBomb3 = bombXY[0] + "-" + (bombXY[1] + 3);
          var positionLeftFromBomb3 = (bombXY[0] - 3) + "-" + bombXY[1];
          var positionRightFromBomb3 = (bombXY[0] + 3) + "-" + bombXY[1];
          break;
        case 4:
          console.log("Power Up: 4");
          var positionAboveBomb = bombXY[0] + "-" + (bombXY[1] - 1);
          var positionUnderBomb = bombXY[0] + "-" + (bombXY[1] + 1);
          var positionLeftFromBomb = (bombXY[0] - 1) + "-" + bombXY[1];
          var positionRightFromBomb = (bombXY[0] + 1) + "-" + bombXY[1];
          var positionAboveBomb2 = bombXY[0] + "-" + (bombXY[1] - 2);
          var positionUnderBomb2 = bombXY[0] + "-" + (bombXY[1] + 2);
          var positionLeftFromBomb2 = (bombXY[0] - 2) + "-" + bombXY[1];
          var positionRightFromBomb2 = (bombXY[0] + 2) + "-" + bombXY[1];
          var positionAboveBomb3 = bombXY[0] + "-" + (bombXY[1] - 3);
          var positionUnderBomb3 = bombXY[0] + "-" + (bombXY[1] + 3);
          var positionLeftFromBomb3 = (bombXY[0] - 3) + "-" + bombXY[1];
          var positionRightFromBomb3 = (bombXY[0] + 3) + "-" + bombXY[1];
          var positionAboveBomb4 = bombXY[0] + "-" + (bombXY[1] - 4);
          var positionUnderBomb4 = bombXY[0] + "-" + (bombXY[1] + 4);
          var positionLeftFromBomb4 = (bombXY[0] - 4) + "-" + bombXY[1];
          var positionRightFromBomb4 = (bombXY[0] + 4) + "-" + bombXY[1];
          break;
        default:
          console.log("SWITCH ERROR")
      }


      // var selectors (gemakkelijker...)
      var $above = $("." + positionAboveBomb + ",." + positionAboveBomb2 + ",." + positionAboveBomb3 + ",." + positionAboveBomb4);
      var $below = $("." + positionUnderBomb + ",." + positionUnderBomb2 + ",." + positionUnderBomb3 + ",." + positionUnderBomb4);
      var $left = $("." + positionLeftFromBomb + ",." + positionLeftFromBomb2 + ",." + positionLeftFromBomb3 + ",." + positionLeftFromBomb4);
      var $right = $("." + positionRightFromBomb + ",." + positionRightFromBomb2 + ",." + positionRightFromBomb3 + ",." + positionRightFromBomb4);

      //explosion animations
      if (!$above.hasClass("bedrock")) {
        $above.addClass("animation");
      }
      if (!$below.hasClass("bedrock")) {
        $below.addClass("animation");
      }
      if (!$left.hasClass("bedrock")) {
        $left.addClass("animation");
      }
      if (!$right.hasClass("bedrock")) {
        $right.addClass("animation");
      }

      setTimeout(function() {
        $above.removeClass("animation");
        $below.removeClass("animation");
        $left.removeClass("animation");
        $right.removeClass("animation");
      }, 800);


      //Rock destroy
      if ($above.hasClass("rock")) {
        console.log("RockABOVE");
        dropPowerUp(positionAboveBomb);

        $above.removeClass("rock");
      }
      if ($below.hasClass("rock")) {
        console.log("rockBELOW");
        dropPowerUp(positionUnderBomb);
        $below.removeClass("rock");

      }
      if ($left.hasClass("rock")) {
        console.log("rockLeft");
        dropPowerUp(positionLeftFromBomb);
        $left.removeClass("rock");
      }
      if ($right.hasClass("rock")) {
        console.log("rockRight");
        dropPowerUp(positionRightFromBomb);
        $right.removeClass("rock");
      }
      // remove bomb
      $("." + bombPosition).removeClass("bomb");

      // when you get hit by the explosion
      //!!! moet nog aangepast worden aan powerups

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


