window.addEventListener("load", () => {

doChart('lambda', 
 {
   'lambda' : { min: 0, max: 1, value: .5, name: 'Lambda', step: 0.01 },
 },
 [
 model => { return {
    type: 'line',
    data: {
      labels: range(0, 20, 1),
      datasets: [{
      	label: 'Probability Density',
      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
      	data: range(0, 20, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
      },
      {
      	label: 'Proportion of Projects Completed',
      	data: range(0, 20, 1).map(i => 1 - Math.exp(-model.lambda.value * i))
      },
      ]
    },
     options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }
 }
 
]);


});