
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

const model = {
	'max': { min: 0, max: 200, value: 10, name: 'Steps', step: 1 }
}

const chart1 = (model) => {
	return {
		type: 'line',
		data: {
			labels: range(0, model.max.value, 1),
			datasets: [{
				label: 'Perimeter Length',
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				data: range(0, model.max.value, 1).map(i => Math.pow((4 / 3), i))
			},
			]
		}
	}
}

const chart2 = (model) => {
	return {
		type: 'line',
		data: {
			labels: range(0, model.max.value, 1),
			datasets: [{
				label: 'Area',
				backgroundColor: ['rgba(255, 132, 99, 0.2)'],
				borderColor: ['rgba(255, 132, 99, 1)'],
				data: range(0, model.max.value, 1).map(i => 8 - 3 * (Math.pow(4 / 9, i)))
			}
			]
		}
	}
}


export default function() {
	return (
		<MyChart model={model} charts={[chart1, chart2]} />
	)
}