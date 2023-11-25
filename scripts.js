    // Set the target date and time
    const targetDate = new Date('2023-08-26T12:00:00'); // Replace with your desired date and time

    // Update the elapsed time display
    function updateElapsedTime() {
      const now = new Date();
      const elapsedTimeInSeconds = Math.floor((now - targetDate) / 1000);
      const elapsedSecondsElement = document.getElementById('elapsed-seconds');
      elapsedSecondsElement.textContent = `${elapsedTimeInSeconds} seconds`;
    }

    // Update the elapsed time every second
    const interval = setInterval(updateElapsedTime, 1000);

    document.getElementById('color-change-btn').addEventListener('click', function() {
      // Generate a random color for demonstration purposes
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      // Change the background color of the body
      document.body.style.background = randomColor;
    });