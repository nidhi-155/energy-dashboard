document.getElementById('duration').addEventListener('change', function() {
    var duration = this.value;

    // Call the API with the selected duration
    callAPI(duration);
});

// Declare myChart outside of your function so it can be accessed later
var myChart;

// Your function that creates the chart
function createChart(ctx, data, duration = 'week') {
    // If myChart is not undefined, destroy it
    if (myChart) {
        myChart.destroy();
    }

    // Create a new chart
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: getLabels(duration), // Get labels based on duration
            datasets: [{
                label: 'Consumption',
                data: data.consumption[duration], // Get data based on duration
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Generation',
                data: data.generation[duration], // Get data based on duration
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
        }
    });
}

// Function to get labels based on duration
function getLabels(duration) {
    if (duration === 'week') {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
    if (duration === 'month') {
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    }
    if (duration === 'year') {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
}


//method for calling the API
function callAPI(duration) {
  var graph = document.getElementById('graph');
    // Clear the graph
    graph.innerHTML = '';

  fetch('http://localhost:3000/energy/' + duration + '/1')
  .then(function(response) {
      // Convert the response to JSON
      return response.json();
  })
  .then(function(data) {
    // example of data: {userid: 1, name: "John Doe", email: "john.doe@abc.com", 
    //   consumption: {min: 4.7, max: 4.9, week: [4.3, 4.5, 4.3, 4.54, 4.7, 4.5, 4.5], month: [4.3, 4.2, 4.3, 4.5], year: [4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 4.3, 4.1, 4.5, 4.2, 4.0, 3.9]},
    //   generation: {min: 2.7, max: 2.9, week: [2.3, 2.5, 2.3, 2.54, 2.7, 2.5, 2.5], month: [2.3, 2.2, 2.3, 2.5], year: [2.1, 2.2, 2.3, 2.5, 2.7, 2.9, 2.3, 2.1, 2.5, 2.2, 2.0, 3.1]},
    //}
    // Assuming the data is stored in a variable called 'data'
    // var data = {
    //     userid: 1,
    //     name: "John Doe",
    //     email: "john.doe@abc.com",
    //     consumption: {min: 4.7, max: 4.9, week: [4.3, 4.5, 4.3, 4.54, 4.7, 4.5, 4.5], month: [4.3, 4.2, 4.3, 4.5], year: [4.1, 4.2, 4.3, 4.5, 4.7, 4.9, 4.3, 4.1, 4.5, 4.2, 4.0, 3.9]},
    //     generation: {min: 2.7, max: 2.9, week: [2.3, 2.5, 2.3, 2.54, 2.7, 2.5, 2.5], month: [2.3, 2.2, 2.3, 2.5], year: [2.1, 2.2, 2.3, 2.5, 2.7, 2.9, 2.3, 2.1, 2.5, 2.2, 2.0, 3.1]},
    // };

    // Get the min and max values for consumption and generation
    var consumptionMin = Math.min(...data.consumption[duration]);
    var consumptionMax = Math.max(...data.consumption[duration]);
    var generationMin = Math.min(...data.generation[duration]);
    var generationMax = Math.max(...data.generation[duration]);

    // Get the stats div
    var stats = document.getElementById('stats');

    // Update the content of the stats div
    stats.innerHTML = `
        <div class="stat">
            <h2>Consumption</h2>
            <p>Min: <span class="value">${consumptionMin}</span></p>
            <p>Max: <span class="value">${consumptionMax}</span></p>
        </div>
        <div class="stat">
            <h2>Generation</h2>
            <p>Min: <span class="value">${generationMin}</span></p>
            <p>Max: <span class="value">${generationMax}</span></p>
        </div>
    `;

    // Your chart creation code goes here
    var ctx = document.getElementById('graph').getContext('2d');
    // Call your function with the appropriate arguments
    createChart(ctx, data, duration);

      
  })
  .catch(function(error) {
      // Log any errors to the console
      console.error('Error:', error);
  });
}

// Call the API with the default duration
callAPI('week');