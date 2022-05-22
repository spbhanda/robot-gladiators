// creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function*****************************************************************
var fight = function (enemyName) {
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

  //   ask player if they want to fight or skip the game
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose"
  );

  //   if player choses to fight, then fight
  if (promptFight === "FIGHT" || promptFight === "fight") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
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

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
  //   if player choses to skip
  else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like t o quit?");

    //   if yes, leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Good bye!");

      // subtract money from player for skipping
      playerMoney = playerMoney - 2;
    }

    // if no, ask qustion again by running fight() again
    else {
      fight();
    }
  }
};
// fight();

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemayNames[i]);
}
