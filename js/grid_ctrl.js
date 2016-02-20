hangmanApp.controller('gridCtrl', function($scope) {

  var rockPositions = setup();

  function setup() {
    var randomX;
    var randomY;
    var randomLength = getRandomInt(2, 10);
    var randomPositionList = ["0-1", "0-2", "0-3", "1-0", "2-0", "3-0", "1-2", "2-1"];

    var randomPosition;

    for (var i = 0; i < randomLength; i++) {
      randomX = getRandomInt(0, 15);
      randomY = getRandomInt(0, 15);
      randomPosition = randomX + "-" + randomY;
      randomPositionList.push(randomPosition);
    }
    return randomPositionList;
  };


  $scope.createGrid = function() {

    for (var y = 0; y < 15; y++) {
        for (var x = 0; x < 15; x++) {
            if (x === 0 && y === 0 ) {
                $scope.gridArray.push("cell current-cell " + x + "-" + y)
            }
            else if (([1, 3, 5, 7, 9, 11, 13].indexOf(x)) != -1 && ([1, 3, 5, 7, 9, 11, 13].indexOf(y)) != -1) {
                $scope.gridArray.push("cell bedrock " + x + "-" + y)
            }
            else if (rockPositions.indexOf((x + "-" + y)) == -1) {
                if (!$("." + x + "-" + y).hasClass("bedrock")) {
                    $scope.gridArray.push("cell rock " + x + "-" + y)
                }
            }
            else {
                $scope.gridArray.push("cell " + x + "-" + y);
            }
        }
    }

    };
      $scope.gridArray = [];
});
    //create random power ups when destroying block (1 kans op 8 per upgrade?)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dropPowerUp(powerUpPosition) {
    console.log("drop upgradechance : " + powerUpPosition)

  if (totalBombs < maxBombs) {
    var chanceForBombUpgrade = getRandomInt(0,8);
    if (chanceForBombUpgrade > 4) {
      $("." + powerUpPosition).addClass("bombupgrade");
      totalBombs++
    }
  }

  if (totalPowerUps < maxPowerUps) {
    var chanceForPowerup = getRandomInt(0,8);
    if (chanceForPowerup > 4) {
      $("."+powerUpPosition).addClass("powerup");
      totalPowerUps++;
    }
  }
}
