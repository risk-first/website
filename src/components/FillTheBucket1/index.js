
import { MyChart, range } from '../MyChart'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)


function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2 * 3.141592 * variance));
	return range.map(r => {
		const num = ((r - mean) * (r - mean));
		const denom = 2 * variance;
		const fact = num / denom;
		return factor * Math.exp(-fact);
	});
}


const model = {
	'units': { min: 1, max: 15, value: 10, name: 'Number of Units', step: 1 },
	'mean': { min: 20, max: 120, value: 60, name: 'Mean time to Complete Unit', step: 1 },
	'variance': { min: 1, max: 50, value: 30, name: 'Variance In Unit Time', step: 1 }
}

const chart1 = (model) => {
	return {
		type: 'line',
		id: '1',
		optons: {
			scales: {
				y: {
					ticks: {
						max: .3,
						min: 0
					}
				}
			}
		},

		data: {
			labels: range(0, 120, 1).map(r => Math.round(r)),
			datasets: [{
				label: 'Time To Complete A Single Unit (minutes)',
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				data: stddev(range(0, 120, 1), model.mean.value, model.variance.value)
			}]
		}
	}
}

const chart2 = (model) => {
	return {
		type: 'line',
		id: "2",
		options: {
			scales: {
				y: {
					ticks: {
						max: .05,
						min: 0
					}
				}
			}
		},
		data: {
			labels: range(0 / 60, 1000 / 60, 10 / 60).map(r => Math.round(r)),
			datasets: [{
				label: 'Time To Complete All Units (hours)',
				backgroundColor: ['rgba(132, 99, 255, 0.2)'],
				borderColor: ['rgba(132, 99, 255, 1)'],
				data: stddev(range(0, 1000, 10), model.mean.value * model.units.value, model.variance.value * model.units.value)
			}]
		}
	}
}



export default function() {
	return (
		<MyChart model={model} charts={[chart1, chart2]} />
	)
}