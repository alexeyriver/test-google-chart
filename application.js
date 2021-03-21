let conversionCheckbox = document.getElementById("conversion");
let sessionCheckbox = document.getElementById("session");
let conversionStatus, sessionStatus;

conversionCheckbox.addEventListener("change", (e) => {
  conversionStatus = e.target.checked;
  google.charts.setOnLoadCallback(drawChart);
});

sessionCheckbox.addEventListener("change", (e) => {
  sessionStatus = e.target.checked;
  google.charts.setOnLoadCallback(drawChart);
});

// item.setProperty = function(property, value) {
//   if (typeof(item.onChange) === 'function') {
//     item.onChange(property, item[property], value);
//   }
//   item[property] = value;
// };
// item.onChange = function(property, oldValue, newValue) {
//   alert(property + ' changed from ' + oldValue + ' to ' + newValue);
// };
// item.setProperty('something', 'Hello world!');

google.charts.load("current", { packages: ["line", "corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var chartDiv = document.getElementById("chart_div");
  var data = new google.visualization.DataTable();
  data.addColumn("date", "Month");
  data.addColumn("number", "Conversion");
  data.addColumn("number", "Sessions");

  data.addRows([
    [new Date(2021, 0, 10), null, null],
    [new Date(2021, 0, 20), null, null],
    [new Date(2021, 0, 30), null, null],
  ]);

  var materialOptions = {
    chart: {
      title: "Product metrics",
    },
    width: 900,
    height: 500,
    series: {
      0: { axis: "Conversion" },
      1: { axis: "Sessions" },
    },
    axes: {
      y: {
        Conversion: { label: "Conversion" },
        Sessions: { label: "Sessions" },
      },
    },
  };

  if (conversionStatus && !sessionStatus) {
    let array = item.metrics.conversions.map((elements) => {
      let arr = [];
      elements.map((el, i) => {
        if (i == 1) {
          arr.push(null);
        }
        arr.push(el);
      });
      return arr;
    });
    data.addRows(array)
  } else if (sessionStatus && !conversionStatus) {
    data.addRows([
      [new Date(2021, 0, 10), 10.5, null],
      [new Date(2021, 0, 20), 8.7, null],
      [new Date(2021, 0, 30), 12, null],
    ]);
  } else if (conversionStatus && sessionStatus) {
    data.addRows([
      [new Date(2021, 0, 10), 20, 25],
      [new Date(2021, 0, 20), 16, 15],
      [new Date(2021, 0, 30), 10, 9],
    ]);
  }

  function drawMaterialChart() {
    var materialChart = new google.charts.Line(chartDiv);
    materialChart.draw(data, materialOptions);
  }

  drawMaterialChart();
}
