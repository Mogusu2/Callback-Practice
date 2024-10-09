// Function to simulate coin collection and score update.
function collectCoin(player, callback) {
    // Simulate the number of coins collected, between 1 and 10.
    const coinsCollected = Math.floor(Math.random() * 10) + 1;
  
    // Simulate a delay for validation (e.g., 1 second).
    setTimeout(() => {
      // Update the player's score with the coins collected.
      player.score += coinsCollected;
  
      // Check if the player has reached or surpassed a score of 50.
      if (player.score >= 50) {
        console.log(`${player.playerName} wins with a score of ${player.score}!`);
      }
  
      // Call the callback with the updated player.
      callback(player);
    }, 1000); // 1-second delay for validation.
  }
  
  // Example Usage:
  collectCoin({ playerName: "Player 1", score: 0 }, function(updatedPlayer) {
    console.log(updatedPlayer.score); // Expected: A number between 1 and 10
  });
  
  collectCoin({ playerName: "Player 2", score: 40 }, function(updatedPlayer) {
    console.log(updatedPlayer.score); // Expected: A number between 41 and 50
  });
  
  collectCoin({ playerName: "Player 3", score: 49 }, function(updatedPlayer) {
    console.log(updatedPlayer.score); // Expected: A number between 50 and 59, and possibly win message
  });
  