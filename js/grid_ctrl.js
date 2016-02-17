hangmanApp.controller('gridCtrl', function($scope) {

  var rockPositions = setup();

  function setup() {
    var randomX;
    var randomY;
    var randomLenght = getRandomInt(2, 10);
    var randomPositionList = ["0-0", "0-1", "0-2", "0-3", "1-0", "2-0", "3-0", "1-2", "2-1"];

    var randomPosition;

    for (var i = 0; i < randomLenght; i++) {
      randomX = getRandomInt(0, 15);
      randomY = getRandomInt(0, 15);
      randomPosition = randomX + "-" + randomY;
      randomPositionList.push(randomPosition);
      return randomPositionList;
    }
  };

  $scope.createGrid = function() {
    for (var y = 0; y < 15; y++) {
      for (var x = 0; x < 15; x++) {
        $(".grid-container").append("<div class='cell " + x + "-" + y + "'></div>");

        if (([1, 3, 5, 7, 9, 11, 13].indexOf(x)) != -1 && ([1, 3, 5, 7, 9, 11, 13].indexOf(y)) != -1) {
          $("."+x+"-"+y).addClass("bedrock");
        }
        if (rockPositions.indexOf((x + "-" + y)) == -1)
        {
          if (!$("."+x+"-"+y).hasClass("bedrock")) {
            $("."+x+"-"+y).addClass("rock");
          }
        }
      }
    }
    $(".0-0").addClass("current-cell");
  };
});
    //create random power ups when destroying block (1 kans op 8 per upgrade?)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dropPowerUp(bombPosition) {

  if (totalBombs < maxBombs) {
    var chanceForBombUpgrade = getRandomInt(0,8);
    if (chanceForBombUpgrade > 4) {
      $("." + bombPosition).addClass("bombupgrade");
      totalBombs++
    }
  }


  if (totalPowerUps < maxPowerUps) {
    var chanceForPowerup = getRandomInt(0,8);
    if (chanceForPowerup > 4) {
      $("."+bombPosition).addClass("powerup");
      totalPowerUps++;
    }
  }
}
