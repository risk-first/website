import { MyChart, range } from '../MyChart'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

// Register Chart.js components required to render the bar chart
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend
)

/**
 * Runs a Monte Carlo simulation tracking cabinet survival/exhaustion over time.
 * @param {Object} model - The configuration model containing initial values.
 * @param {number} its - The total number of simulation iterations to execute.
 * @returns {Array} An array tracking the frequency of days when simulations ended.
 */
function runSim(model, its) {
	var out = [];

	for (var i = 0; i < its; i++) {
		var size = model.cabinets.value; // Initialize starting cabinet capacity
		var day = 0;
		
		// The simulation continues until time runs out OR all cabinets are exhausted (size reaches 0)
		while ((day < model.time.value) && (size > 0)) {
			var r = Math.random();
			
			// A probabilistic chance to successfully add an extra cabinet resource
			if (r < model.chance.value) {
				size += 1;
			}

			size--; // One cabinet resource gets consumed/removed daily
			day++;
		}

		// Increment the counter tracking the exact day this iteration terminated
		out[day] = out[day] ? out[day] + 1 : 1;
	}

	return out;
}

// Default slider configuration state passed down to the UI layout wrapper
const model = {
	'cabinets': { min: 1, max: 30, value: 10, name: 'Initial Cabinets', step: 1 },
	'chance': { min: 0, max: 1, value: .2, name: 'Chance Of Nesting', step: .01 },
	'time': { min: 30, max: 200, value: 50, name: 'Duration', step: 1 }
}

/**
 * Generates the Chart.js dataset config object mapping simulation output to UI graphs.
 * @param {Object} model - Current responsive slider state parameters.
 */
const chart1 = (model) => {

	return {
		type: 'bar', // Render as a Bar Chart
		id: "1",
		data: {
			// X-axis scale labels ranging from day 0 up to max duration threshold
			labels: [...range(0, model.time.value, 1), model.time.value + "+"],
			datasets: [{
				label: 'Simulations taking',
				data: runSim(model, 1000), // Execute 1,000 distinct operational loops
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1
			}]
		},
		options: {
			maintainAspectRatio: false, // Allows responsive scaling inside dynamic grid containers
			scales: {
				y: {
					ticks: {
						beginAtZero: true // Enforces Y-axis origins to strictly begin at 0
					}
				}
			}
		}
	}
}

// Exported wrapper interface combining reactive parameter state widgets alongside visualization charts
export default function() {
	return (
		<MyChart model={model} charts={[chart1]} />
	)
}
