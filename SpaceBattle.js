//Alien Variables
let shipNames = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"];
let alienFlight = [];

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    (this.hull = hull),
      (this.firepower = firepower),
      (this.accuracy = accuracy);
  }

  //Methods

  startGame() {
    let userInput = prompt(
      `Would you like to start a new game?`,
      "(Y)es or (N)o"
    );
    if (userInput === "Y" || userInput == "y") {
      this.attack();
    } else {
      alert("Please refresh your browser.");
      prompt.close();
    }
  }

  attack(enemy) {
    //If there are still alien ships and if the first Alien is not dead and my accuracy is better than the requirement... fire!
    while (alienFlight.length > 0) {
      if (alienFlight[0].hull > 0 && Math.random() < this.accuracy) {
        //Subtract firepower from hull health
        alienFlight[0].hull -= this.firepower;

        alert(
          `Fry hit Omicron Persei 8 ship ${alienFlight[0].name} with a direct hit for ${this.firepower} damage. It's hull has ${alienFlight[0].hull} health.`
        );

        if (alienFlight[0].hull <= 0) {
          alert(
            `Omicron Persei 8 ship ${alienFlight[0].name} has been destroyed!`
          );
          alienFlight.shift();

          if (alienFlight.length == 0) {
            alert(`You Win! Blue Blue Shiny Ball is safe!`);
            this.gameOver();
          } else {
            alert(
              `Watch out Leela! Here comes Omicron Persei 8 ship ${alienFlight[0].name}!`
            );
            alienFlight[0].attack();
          }
        }
        alert(
          `Incoming! Omicron Persei 8 ship ${alienFlight[0].name} fired its missiles.`
        );
        alienFlight[0].attack();
      } else {
        //My accuracy was not high enough.
        alert(
          `First Mate Wiggles missed his shot! Here comes the Omicron Persei 8 ship ${alienFlight[0].name} for a counter attack!`
        );
        alienFlight[0].attack();
      }
      alienFlight[0].attack();
    }
    alienFlight[0].attack();
  }

  retreat() {
    alert("Because you retreated, Earth was destroyed.");
    this.gameOver();
  }

  strategicRetreat() {
    let amountHealed = Math.floor(Math.random() * 3) + 3;
    let heal = (heroShip.hull += amountHealed);
    alert(
      `Leela made a strategic retreat. Bender was able to repair the Planet Express Ship for ${amountHealed}. The ${heroShip.name}'s hull now has ${this.hull} health points left.`
    );
  }

  gameOver() {
    this.startGame();
  }
}

//Making Hero Ship
const heroShip = new Ship("Planet Express", 20, 5, 0.7);

// Make Alien Ships
class Alien {
  constructor(name, hull, firepower, accuracy) {
    (this.name = name), (this.hull = hull);
    (this.firepower = firepower), (this.accuracy = accuracy);
  }

  attack(enemy) {
    while (heroShip.hull > 0) {
      if (Math.random() < this.accuracy) {
        heroShip.hull -= this.firepower;
        alert(
          `The ${heroShip.name} Ship took a direct hit. ${heroShip.name}' health is now ${heroShip.hull}.`
        );

        if (heroShip.hull >= 1) {
          let userInput = prompt(
            `Would you like to (A)ttack, (R)etreat or (S)trategically retreat?`,
            "(A)ttack, (R)etreat, (S)trategically retreat"
          );
          if (userInput == "A" || userInput == "a") {
            heroShip.attack();
          } else if (userInput == "R" || userInput == "r") {
            heroShip.retreat();
          } else if (userInput == "S" || userInput == "s") {
            heroShip.strategicRetreat();
          } else {
            heroShip.attack();
          }
        } else {
          alert(
            `The ${heroShip.name} crew was destroyed. The universe is doomed! DOOOOOOMMMMMMMMEEEEEEEDDD!!!!!`
          );
          alert("Game Over");
          this.gameOver();
        }
      } else {
        alert(
          `Nice flying Leela! Omicron Persei 8 ship ${alienFlight[0].name} missed their shot.`
        );

        let userInput = prompt(
          "Would you like to (A)ttack, (R)etreat, or (S)trategically retreat?",
          "(A)ttack, (R)etreat, (S)trategically retreat"
        );
        if (
          userInput == "A" ||
          userInput == "a" ||
          userInput == "attack" ||
          userInput == "Attack"
        ) {
          heroShip.attack();
        } else if (
          userInput == "R" ||
          userInput == "r" ||
          userInput == "retreat" ||
          userInput == "Retreat"
        ) {
          heroShip.retreat();
        } else if (
          userInput == "S" ||
          userInput == "s" ||
          userInput == "strategically retreat" ||
          userInput == "Strategically retreat"
        ) {
          heroShip.strategicRetreat();
        }
        heroShip.attack();
      }
    }
  }

  gameOver() {
    heroShip.startGame();
  }
}

//Making Alien Ships
for (let i = 0; i < 6; i++) {
  let alienHull = Math.floor(Math.random() * 4) + 3;
  let alienFirepower = Math.floor(Math.random() * 3) + 2;
  let alienAccuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  alienShips = new Alien(
    `${shipNames[i]}`,
    alienHull,
    alienFirepower,
    alienAccuracy
  );
  alienFlight.push(alienShips);
}

//Start Game
heroShip.startGame();

//Combat
heroShip.attack(alienFlight[0]);
