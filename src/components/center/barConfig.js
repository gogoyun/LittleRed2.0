export const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: false,
    tooltip: false,
	},
	scales: {
		x: {
			ticks: {
				display: false
			},
			border: {
				display: false,
			},
			grid: {
				display: false,
			},
			stacked: true,
		},
		y: {
			ticks: {
				display: false
			},
			border: {
				display: false,
			},
			grid: {
				display: false,
			},
			stacked: true,
			min: -100,
			max: 100,
		},
		y1: {
			ticks: {
				display: false
			},
			border: {
				display: false,
			},
			grid: {
				display: false,
			},
			stacked: true,
			min: -100,
			max: 100,
		}
	}
}