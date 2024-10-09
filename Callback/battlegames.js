// Function to simulate a turn-based battle.
function turnBasedBattle({ player1, player2 }, callback) {
    // Function to simulate an attack.
    function attack(attacker, defender) {
      const damage = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20.
      defender.health -= damage;
      console.log(`${attacker.name} attacks ${defender.name} for ${damage} damage!`);
      console.log(`${defender.name} now has ${defender.health} health.`);
  
      // Check if the defender's health has reached zero or below.
      if (defender.health <= 0) {
        console.log(`${defender.name} has been defeated! ${attacker.name} wins!`);
        callback(attacker.name);
        return true; // Indicate that the game is over.
      }
      return false; // Indicate that the game should continue.
    }
  
    // Function to alternate turns with a delay.
    function battleRound() {
      if (attack(player1, player2)) return; // Player 1 attacks Player 2.
      
      // Delay before the next attack.
      setTimeout(() => {
        if (attack(player2, player1)) return; // Player 2 attacks Player 1.
        
        // Continue to the next round if no winner yet.
        setTimeout(battleRound, 1000);
      }, 1000);
    }
  
    // Start the battle.
    battleRound();
  }
  
  // Example Usage:
  turnBasedBattle(
    { player1: { name: "Player 1", health: 100 }, player2: { name: "Player 2", health: 100 } }, 
    function(winner) {
      console.log(`Winner: ${winner}`); // Expected: "Player 1" or "Player 2" based on random damage.
    }
  );
  
  turnBasedBattle(
    { player1: { name: "Player 1", health: 20 }, player2: { name: "Player 2", health: 100 } }, 
    function(winner) {
      console.log(`Winner: ${winner}`); // Expected: "Player 2"
    }
  );
  