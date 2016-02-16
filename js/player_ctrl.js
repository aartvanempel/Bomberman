var start = [0,0];
var currentPosition;
var bombPosition;

hangmanApp.controller('playerCtrl', function($scope) {

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

    /////////////////
    //Player movement
    /////////////////

    currentPosition = start[0] + "-" + start[1];
    console.log(currentPosition);
    $(".cell").removeClass("current-cell");
    $("." + currentPosition).addClass("current-cell");


    //powerup if player gets the powerup cell

    if ($(".current-cell").hasClass("powerup")) {
      if (playerPowerUp < 4) {
        $(".current-cell").removeClass("powerup");
        playerPowerUp++;
      }
    }



    /////////////////
    //bomb explosion
    /////////////////

    function bombExplosion() {
      bombPosition = bombXY[0] + "-" + bombXY[1];

      //bombpositions for powerups

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

      //listing of bombpositions
      var bombPositionList1 = [];
      var bombPositionList2 = [];
      var bombPositionList3 = [];
      var bombPositionList4 = [];

      //putting bombpositions in the lists
      bombPositionList1.push(positionAboveBomb,positionRightFromBomb,positionUnderBomb,positionLeftFromBomb);
      bombPositionList2.push(positionAboveBomb2,positionRightFromBomb2,positionUnderBomb2,positionLeftFromBomb2);
      bombPositionList3.push(positionAboveBomb3,positionRightFromBomb3,positionUnderBomb3,positionLeftFromBomb3);
      bombPositionList4.push(positionAboveBomb4,positionRightFromBomb4,positionUnderBomb4,positionLeftFromBomb4);


      switch(playerPowerUp) {
        case 1:
          console.log("Power Up: 1");
          var $above = $("." + bombPositionList1[0]);
          var $right = $("." + bombPositionList1[1]);
          var $below = $("." + bombPositionList1[2]);
          var $left = $("." + bombPositionList1[3]);
          break;
        case 2:
          console.log("Power Up: 2");
          var $above = $("." + bombPositionList1[0] + ",." + bombPositionList2[0]);
          var $right = $("." + bombPositionList1[1] + ",." + bombPositionList2[1]);
          var $below = $("." + bombPositionList1[2] + ",." + bombPositionList2[2]);
          var $left = $("." + bombPositionList1[3] + ",." + bombPositionList2[3]);
          break;
        case 3:
          console.log("Power Up: 3");
          var $above = $("." + bombPositionList1[0] + ",." + bombPositionList2[0] + ",." + bombPositionList3[0]);
          var $right = $("." + bombPositionList1[1] + ",." + bombPositionList2[1] + ",." + bombPositionList3[1]);
          var $below = $("." + bombPositionList1[2] + ",." + bombPositionList2[2] + ",." + bombPositionList3[2]);
          var $left = $("." + bombPositionList1[3] + ",." + bombPositionList2[3] + ",." + bombPositionList3[3]);
          break;
        case 4:
          console.log("Power Up: 4");
          var $above = $("." + bombPositionList1[0] + ",." + bombPositionList2[0] + ",." + bombPositionList3[0] + ",." + bombPositionList4[0]);
          var $right = $("." + bombPositionList1[1] + ",." + bombPositionList2[1] + ",." + bombPositionList3[1] + ",." + bombPositionList4[1]);
          var $below = $("." + bombPositionList1[2] + ",." + bombPositionList2[2] + ",." + bombPositionList3[2] + ",." + bombPositionList4[2]);
          var $left = $("." + bombPositionList1[3] + ",." + bombPositionList2[3] + ",." + bombPositionList3[3] + ",." + bombPositionList4[3]);
          break;
        default:
          console.log("SWITCH ERROR")
      }

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

      //remove animations
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
      if ($(".current-cell").hasClass("animation")) {
        alert("je bent omgekomen bij een bomexplosie");
      }
    }


    // show player on current cell




  };
});


