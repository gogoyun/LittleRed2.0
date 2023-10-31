export const overlapDlice = [{
  beforeDatasetDraw(chart, args) {
    const { ctx, data } = chart;
    ctx.save();
    data.datasets.forEach(()=>{
      args.meta.data[0].outerRadius = 150;
      args.meta.data[0].innerRadius = 105;
    })
    
  },
}];
export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltip: false,
    datalabels: {
      color: '#fff',
      align: 'top',
      anchor: 'end',
      offset: 40,
      clamp: true,
      backgroundColor: '#6fbbac',
      borderRadius: 6,
      font: {
        size: 23,
      },
      formatter: function(value) {
        return value + '%';
      }
    }
  },
  cutout: "70%",
  rotation: -90,
  animation: {
    animateRotate: false,
  },
};