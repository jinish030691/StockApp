export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  hover: {
    mode: null
  },
  events: [],

  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      type: "time",
      distribution: "linear",
      gridLines: {
        display:false
      }
    }],
    yAxes:[{
      position: 'right',
      gridLines: {
        display:false
      }
    }],
  },
};