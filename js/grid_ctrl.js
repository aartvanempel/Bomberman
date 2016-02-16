app.controller('gridCtrl', function($scope) {



  var rockPositions = randomCoordinate("0-0");


  $scope.createGrid = function() {
    for (var y = 0; y < 15; y++) {
      for (var x = 0; x < 15; x++) {
        if (([1, 3, 5, 7, 9, 11, 13].indexOf(x)) != -1 && ([1, 3, 5, 7, 9, 11, 13].indexOf(y)) != -1) {
          $(".grid-container").append("<div class='bedrock cell " + x + "-" + y + "'></div>");
        } else if (
           rockPositions.indexOf((x + "-" + y)) == -1
        ){
          $(".grid-container").append("<div class='rock cell " + x + "-" + y + "'></div>");
        }
        else {
          $(".grid-container").append("<div class='cell " + x + "-" + y + "'></div>");
        }
      }
    }
    $(".0-0").addClass("current-cell");
    //create random power ups when destroying block (1 kans op 8 per upgrade?)
  };

});

function randomCoordinate(spawnPosition) {
  var randomX;
  var randomY;
  var randomLenght = getRandomInt(2, 10);
  var randomPosition;
  var randomPositionList = [];


  //start positions (vul hier misschien direcht spawn positions ook in ??

  randomPositionList = ["0-1", "0-2", "0-3", "1-0", "2-0", "3-0", "1-2", "2-1"];
  randomPositionList.push(spawnPosition);


  for (var i = 0; i < randomLenght; i++) {
    randomX = getRandomInt(0, 15);
    randomY = getRandomInt(0, 15);
    randomPosition = randomX + "-" + randomY;
    randomPositionList.push(randomPosition);
  }


  console.log(randomPositionList);
  return randomPositionList;

}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

