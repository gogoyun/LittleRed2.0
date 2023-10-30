export const overlapDlice = [{
  beforeDatasetDraw(chart, args) {
    const { ctx, data } = chart;
    ctx.save();
    data.datasets.forEach(()=>{
      args.meta.data[0].outerRadius = 150;
      args.meta.data[0].innerRadius = 105;
    })
    
  },
  // beforeRender(chart) {
  //   console.log(chart);
  // },
  // afterDraw(chart) {
  //   console.log(chart);
  // }
}];
export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltip: {
      enabled: true,
      caretPadding: 30,
      xAlign: 'center',
      yAlign: 'bottom',
      backgroundColor: '#6fbbac',
      displayColors: false,
      bodyFont: {
        size: 23
      },
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.formattedValue+'%';
        },
      },
    }
  },
  cutout: "70%",
  rotation: -90,
  animation: {
    animateRotate: false,
  },
};