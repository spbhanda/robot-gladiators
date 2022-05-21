// creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that they are starting a round
  window.alert("Welcome to Robot Gladiators!");

  // Subtract playerAttack value from enemyHealth value
  enemyHealth = enemyHealth - playerAttack;

  // log result to console
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  //   check enemy's health points
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left");
  }

  // SUbtract enemyAttack value from playerHealth value
  playerHealth = playerHealth - enemyAttack;

  // log the resut to console
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remamining."
  );

  //   Check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died !");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left");
  }
};

fight();
