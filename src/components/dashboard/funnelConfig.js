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
				display: false
			},
			grid: {
				display: false
			},
		},
		y: {
			ticks: {
				display: false
			},
			border: {
				display: false
			},
			grid: {
				display: false
			},
			grace: '1%',//與頂部或底部保持1%的距離
		}
	}
}