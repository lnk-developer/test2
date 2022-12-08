am4core.useTheme(am4themes_animated);

var chart = am4core.create("mycright", am4charts.XYChart);

chart.data = [{
	"country": "1분기 누계",
	"visits": 18372
}, {
	"country": "2분기 누계",
	"visits": 43823
}, {
	"country": "3분기 누계",
	"visits": 91628
}, {
	"country": "4분기 누계",
	"visits": 112550
}];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 60;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;

chart.cursor = new am4charts.XYCursor();

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
	return chart.colors.getIndex(target.dataItem.index);
});