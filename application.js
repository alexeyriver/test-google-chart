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
      elements.push(null);
      return elements;
    });
    console.log(array);
    data.addRows(array);
  } else if (sessionStatus && !conversionStatus) {
    let array = item.metrics.sessions.map((elements) => {
      let arr = [];
      elements.map((el, i) => {
        if (i == 1) {
          arr.push(null);
        }
        arr.push(el);
      });
      return arr;
    });
    data.addRows(array);
  } else if (conversionStatus && sessionStatus) {
    let array = [];
    for (let i = 0; i < item.metrics.conversions.length; i++) {
      let newArr = [];
      newArr.push(item.metrics.conversions[i][0]);
      newArr.push(item.metrics.conversions[i][1]);
      newArr.push(item.metrics.sessions[i][1]);
      array.push(newArr);
    }
    data.addRows(array);
  }

  var data2 = google.visualization.arrayToDataTable([
    ['date', 'number'],
    [ new Date(2021, 0, 30),      12],
    [ new Date(2021, 0, 30),      5.5],
    [ new Date(2021, 0, 30),     14],
    [ new Date(2021, 0, 30),      5],
   
  ]);



  function drawMaterialChart() {
    var materialChart = new google.charts.Line(chartDiv);
    materialChart.draw(data, materialOptions);
  //   var chart = new google.visualization.ComboChart(chartDiv)
  //  chart.draw(data2, materialOptions);
  }

  drawMaterialChart();
}
