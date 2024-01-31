window.addEventListener("load", () => {
	var max = 10;
	
	doChart('koch', 
	 undefined,
	 [
	 model => { 	 
	  return {
	    type: 'line',
	    data: {
	      labels: range(0, max, 1),
	      datasets: [{
	      	label: 'Perimeter Length',
	      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
	      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
	      	data: range(0, max, 1).map(i => Math.pow((4/3), i))
	      },
	      ]
	    }
	  }},
	  model => { 
		  return {
		    type: 'line',
		    data: {
		      labels: range(0, max, 1),
		      datasets: [{
		      	label: 'Area',
		      	backgroundColor: [ 'rgba(255, 132, 99, 0.2)' ],
		      	borderColor: [ 'rgba(255, 132, 99, 1)' ],
		      	data:  range(0, max, 1).map(i => 8-3*(Math.pow(4/9, i)))
		      }
		      ]
		    }
		  }
	},
	 
	]);

});
