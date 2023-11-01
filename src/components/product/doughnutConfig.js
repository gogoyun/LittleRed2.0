export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltip: false
  },
  cutout: "75%",
  animation: {
    animateRotate: false
  }
};
export const overlapDlice = [{
  beforeDatasetDraw(chart, args) {
    const { ctx, data } = chart;
    ctx.save();
    data.datasets.forEach(()=>{
      args.meta.data[0].outerRadius = 45;
      args.meta.data[0].innerRadius = 36;
    })
    
  },
}];
export const optionsInfo = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltip: false,
  },
  rotation: -90,
  animation: {
    animateRotate: false,
  },
}