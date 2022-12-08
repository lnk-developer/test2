am4core.useTheme(am4themes_animated);

var chart = am4core.create("circlechart", am4charts.PieChart);


chart.data = [{
    "country": "특수관계인",
    "litres": 77.0
}, {
    "country": "기타주주",
    "litres": 23.0
}];

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "litres";
series.dataFields.category = "country";

// this creates initial animation
series.hiddenState.properties.opacity = 1;
series.hiddenState.properties.endAngle = -90;
series.hiddenState.properties.startAngle = -90;

chart.legend = new am4charts.Legend();