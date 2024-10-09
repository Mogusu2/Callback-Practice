// Simulated events with random success/failure
function encounterEnemy(callback) {
    setTimeout(() => {
      console.log("Encountered an enemy!");
      callback(true); // Assuming the encounter is always successful
    }, Math.random() * 2000); // Random delay up to 2 second
  }
  
  function defeatEnemy(callback) {
    setTimeout(() => {
      console.log("Defeated the enemy!");
      callback(true); // Assuming defeating an enemy is successful
    }, Math.random() * 2000); // Random delay up to 2 second
  }
  
  function collectLoot(callback) {
    setTimeout(() => {
      // Random success or failure
      const isSuccess = Math.random() > 0.5; // 50% chance of success
      if (isSuccess) {
        callback("Loot collected successfully");
      } else {
        callback("Loot collection failed due to random failure");
      }
    }, Math.random() * 2000); // Random delay up to 2 second
  }
  
  // Function to process events in order
  function gameEventQueue(events, finalCallback) {
    let currentIndex = 0;
  
    function processNext() {
      if (currentIndex >= events.length) {
        finalCallback("All events processed.");
        return;
      }
  
      const event = events[currentIndex];
      
      // Call the event and define a timeout for each event
      const timeout = setTimeout(() => {
        finalCallback("Timed-out event, moving to next");
        currentIndex++;
        processNext(); // Move to the next event
      }, 2000); // 2-second timeout
  
      // Execute the event and clear timeout if it completes in time
      event((result) => {
        clearTimeout(timeout); // Clear the timeout as the event completed
        finalCallback(result); // Call final callback with the result
        currentIndex++;
        processNext(); // Process the next event
      });
    }
  
    // Start processing the events
    processNext();
  }
  
  // Example Test Cases
  gameEventQueue([encounterEnemy, defeatEnemy, collectLoot], function(result) {
    console.log(result); // Expected: "Loot collected successfully" or "Loot collection failed due to random failure"
  });
  
  gameEventQueue([encounterEnemy, defeatEnemy, collectLoot], function(result) {
    console.log(result); // Expected: "Loot collection failed due to random failure"
  });
  
  gameEventQueue([encounterEnemy, defeatEnemy, collectLoot], function(result) {
    console.log(result); // Expected: "Timed-out event, moving to next" or any other event result
  });
  