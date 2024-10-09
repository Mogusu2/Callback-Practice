// Array to store user interactions.
let interactionData = [];

// Timeout variable to manage the delay before sending data.
let sendTimeout;

// Function to simulate sending data to the server and invoking the callback.
function sendDataToServer() {
  interactionData.forEach(({ data, callback }) => {
    console.log('Sending data to server:', data);
    // Here, you would make an HTTP request to your server using fetch, axios, etc.
    // Example: fetch('/sendData', { method: 'POST', body: JSON.stringify(data) });

    // Invoke the callback with the data.
    callback(data);
  });

  // Clear the interactionData after sending.
  interactionData = [];
}

// Function to collect interaction data and callback.
function trackInteraction(type, callback) {
  // Prepare the interaction data.
  const data = `User ${type === 'click' ? 'clicked on button' : 'viewed the page'}`;

  // Add the interaction data and the callback to the array.
  interactionData.push({ data, callback });

  // If there's a previous timeout, clear it to reset the delay.
  if (sendTimeout) {
    clearTimeout(sendTimeout);
  }

  // Set a new timeout to send the data after 2 seconds of inactivity.
  sendTimeout = setTimeout(sendDataToServer, 2000);
}

// Example Usage:
trackInteraction("click", function(data) {
  console.log(data); // Expected: "User clicked on button"
});

trackInteraction("page view", function(data) {
  console.log(data); // Expected: "User viewed the page"
});

trackInteraction("click", function(data) {
  console.log(data); // Expected: "User clicked on button"
});

trackInteraction("page view", function(data) {
  console.log(data); // Expected: "User viewed the page"
});
