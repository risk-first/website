window.addEventListener("load", () => {

function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2* 3.141592 * variance));
	return range.map(r => {
		const num= ((r - mean)*(r - mean));
		const denom = 2 * variance;
		const fact = num / denom;

		return factor * Math.exp(-fact);
	});
}

function random_normal() 
{  
  const M_PI = 3.14159;	
  return Math.sqrt(-2*Math.log(Math.random())) * Math.cos(2*M_PI*Math.random());
}

var mean = 11;
var variance = 2.5

const samples = range(0, 200, 1).map(i => random_normal()*variance+mean);

function bucket(samples) {
	var out = new Array(20).fill(0);
	samples.forEach(s => {
		var b = Math.round(s);
		if ((b>=0) && (b<20)) {
			out[b] ++;
		}
	});
	return out;
}
function calcMean(s) {
	var tot = s.reduce((a,b) => a+b);
	var len = s.length;
	return tot/len;
}
	
function calcVar(s, mean) {
	var tot = s.map(i => (i - mean)*(i - mean)).reduce((a, b) => a+b);
	var len = s.length - 1;
	return tot / len;
}

doChart('simulation2', 
 {
   'samples' : { min: 2, max: 200, value: 3, name: 'Individual Samples', step: 1 },
 },
 [
	 model => { 
	     var subsam = samples.slice(0, model.samples.value);
		 var mean = calcMean(subsam);
		 var variance = calcVar(subsam, mean);
		 var buckets = bucket(subsam);
	 	 var dist = stddev(range(0, 20, 1), mean, variance).map(r => r* model.samples.value);
	 
	 return {
		    type: 'bar',
		    data: {
		        labels: range(0, 20, 1),
		        datasets: [{
		            label: 'Samples',
		            data: buckets,
		            borderWidth: 1,
		            backgroundColor: 'rgba(132, 99, 255, 0.2)' ,
			      	borderColor:  'rgba(132, 99, 255, 1)' ,
		        },
		        {
		        	type: 'line',
		        	label: 'Normal Distribution Fit',
		        	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
			      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
		        	data: dist
		        }]
		    },
		   
		}}]);
		
	});
