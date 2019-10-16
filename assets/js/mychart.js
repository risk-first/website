function create(tag, cls, inside) {
	var e = document.createElement(tag);
	e.setAttribute("class", cls);
	inside.appendChild(e);
	return e;
} 

function range(from, to, step) {
	var out = [];
	var n = from;
	while (n < to) {
		out.push(n);
		n += step;
	}
	return out;
}

function doChart(elementId, model, charts) {
	
	function update(v, e, f) {
		v.value = parseFloat(e.target.value);
		f(e.target.value);
		
		charts.forEach(function(f) {
			
			var myChart = f.myChart;
			var newConfig = f(model);
			myChart.data.datasets = newConfig.data.datasets;
			myChart.data.labels = newConfig.data.labels;
			myChart.update();
		})
		
	}
	
	
	var element = document.querySelector("#"+elementId);
	element.setAttribute("class", "container-fluid");
	
	var row = create("div", "row", element);
	var graphs = create("div", "col-sm", row);
	
	
	if (model.length > 0) {
		var controls = create("div", "col-sm", row);
		var form = create("form", "", controls);
		
		$.each(model, (k, v) => {
			var fg = create("div", "form-group", form);
			var label = create("label", "", fg);
			label.setAttribute("for", k);
			label.textContent = v.name+": "+v.value; 
			
			var input = create("input", "form-control-range", fg);
			input.setAttribute("type", "range");
			input.setAttribute("name", k);
			input.setAttribute("max", v.max);
			input.setAttribute("min", v.min);
			input.setAttribute("step", v.step);
			input.setAttribute("value", v.value);
			input.addEventListener("change", e => update(v, e, val => label.textContent = v.name+ ": "+val));
			
			var output = create("output", "", fg);
			output.setAttribute("name", k);
		}); 
		
	}
	
	charts.forEach(function(f) {
		// this is the info we'll use to populate the chart
		var chartData = f(model);
		
		// create the elements
		var canvas = create("canvas", "", graphs);
		var ctx = canvas.getContext('2d');
		var myChart = new Chart(ctx, chartData);
		f.myChart = myChart;
	} );
	
}