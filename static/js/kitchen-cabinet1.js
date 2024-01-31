window.addEventListener("load", () => {


function runSim(model, its) {
	var out=[];
	
	for(var i = 0; i <its; i++) {
		var size = model.cabinets.value;
		var day = 0;
		while ((day < model.time.value) && (size > 0)) {
			var r = Math.random();
			if (r<model.chance.value) {
				size += 1;
			}	
			
			size --;
			day ++;
		}
		
		out[day] = out[day] ? out[day]+1 : 1;
	}
	
	return out;
}

doChart('simulation', 
 {
   'cabinets' : { min: 1, max: 30, value: 10, name: 'Initial Cabinets', step: 1 },
   'chance' : { min: 0, max: 1, value: .2, name: 'Chance Of Nesting', step: .01 },
   'time' : { min: 30, max:200, value: 50, name: 'Duration', step: 1}
 },
 [ model => { return {
    type: 'bar',
    data: {
        labels: [...range(0, model.time.value, 1), model.time.value+"+"],
        datasets: [{
            label: 'Simulations taking',
            data: runSim(model, 1000),
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
      		borderColor: [ 'rgba(255, 99, 132, 1)' ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}}
]);

});
