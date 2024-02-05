import React from 'react';
import styles from './styles.module.css'
import { Chart } from 'react-chartjs-2'

export function range(from, to, step) {
	var out = [];
	var n = from;
	while (n < to) {
		out.push(n);
		n += step;
	}
	return out;
}

function Model({model, update}) {
	return (
		<div className={styles.controls}>
			<form>
				{
					Object.keys(model).map(k => {
						let v = model[k]
						
						return (
							<div key={k} className="form-group">
								<label htmlFor={k}>{v.name}: {v.value}</label>
								<input type="range" name={k} max={v.max} min={v.min} step={v.step} defaultValue={v.value} onChange={e => update(k, e.currentTarget)}/>
							</div>
						)															
					})
				}
			</form>
		</div>
	)
} 

export function MyChart({model, charts}) {
	const [, forceUpdate] = React.useReducer(o => !o)
	
	
	function update(f, e) {
		model[f].value = parseFloat(e.value);
		forceUpdate()
	}
	
	
	return (
		<div className={styles.chart}>
			{ model ? <Model model={model} update={update}/> : "" }
			<div className={styles.charts}>
			{
				charts
					.map( c => c(model) )
					.map( c => 
						<Chart key={c.id} type={c.type} options={c.options} data={c.data} />
					)
			}
			</div>
		</div>
	)
	
}
