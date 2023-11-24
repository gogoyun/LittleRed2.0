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
				color: '#fff',
				font: {
					size: 10
				},
				callback: function(value, index) {
					return (index > 1)? value : null;
				}
			},
			border: {
				color: '#fff',
				dash: [3, 2]
			},
			grid: {
				color: 'rgba(255, 255, 255, 0.1)',
				tickLength: 0,
			},
			title: {
				display: true,
				text: '%/month',
				color: '#fff',
				align: 'start',
				font: {
					size: 9
				},
				padding: {
					top: -18,
					bottom: 10
				}
			}
		},
		y: {
			ticks: {
				color: '#fff',
				font: {
					size: 10
				},
				callback: function(value, index) {
					return (index > 0)? value : null;
				}
			},
			border: {
				display: false,
			},
			grid: {
				color: 'rgba(255, 255, 255, 0.1)',
			},
			grace: '1%',//與頂部或底部保持1%的距離
		}
	}
}