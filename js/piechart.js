/*

	Project Name : Metrica

	## Document Ready
	
		- Doughnut Chart


*/
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {
	
		/* - Doughnut Chart */
		if($(".doughnut-style").length) {
			if($("#chartstyle-1_1").length) {
				var data = [
				   {
					value: 46,
					color: "#998675",
					label: "<b>46%</b> - Creative"
					
				}, {
					value: 29,
					color: "#b7aa9f",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 55,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-1_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-1").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-1_2").length) {
				var data = [
				   {
					value: 46,
					color: "#998675",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#b7aa9f",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 55,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-1_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-2").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-1_3").length) {
				var data = [
				   {
					value: 46,
					color: "#998675",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#b7aa9f",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 55,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-1_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-3").innerHTML = myChart.generateLegend();
			}
		}
		
		if($(".doughnut-style").length) {
			if($("#chartstyle-2_1").length) {
				var data = [
				   {
					value: 46,
					color: "#746455",
					label: "<b>46%</b> - Creative"
					
				}, {
					value: 29,
					color: "#b7aa9f",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-2_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-4").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-2_2").length) {
				var data = [
				   {
					value: 46,
					color: "#746455",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#b7aa9f",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-2_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-5").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-2_3").length) {
				var data = [
				   {
					value: 46,
					color: "#746455",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#b7aa9f",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-2_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-6").innerHTML = myChart.generateLegend();
			}
		}
		
		if($(".doughnut-style").length) {
			if($("#chartstyle-3_1").length) {
				var data = [
				   {
					value: 46,
					color: "#d49d19",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e0bb61",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#f0e3c2",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-3_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-7").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-3_2").length) {
				var data = [
				   {
					value: 46,
					color: "#d49d19",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e0bb61",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#f0e3c2",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-3_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-8").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-3_3").length) {
				var data = [
				   {
					value: 46,
					color: "#d49d19",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e0bb61",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#f0e3c2",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-3_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-9").innerHTML = myChart.generateLegend();
			}
		}
		
		if($(".doughnut-style").length) {
			if($("#chartstyle-4_1").length) {
				var data = [
				   {
					value: 46,
					color: "#cf4900",
					label: "<b>46%</b> - Creative"
					
				}, {
					value: 29,
					color: "#e2976e",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#efcebb",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-4_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-10").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-4_2").length) {
				var data = [
				   {
					value: 46,
					color: "#cf4900",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e2976e",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#efcebb",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-4_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-11").innerHTML = myChart.generateLegend();
			}
			if($("#chartstyle-4_3").length) {
				var data = [
				   {
					value: 46,
					color: "#cf4900",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e2976e",
					label: "<b>29%</b> - Ideas"
				}, {
					value: 25,
					color: "#efcebb",
					label: "<b>25%</b> - Other"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 90,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("myChartstyle-4_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("js-legend-12").innerHTML = myChart.generateLegend();
			}
		}
		
		/* - Full Pie Chart */
		
		if($(".full-pie-style").length) {
			if($("#fullchart-1_1").length) {
				var data = [
				   {
					value: 46,
					color: "#998675",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#bdb1a6",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-1_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-1_1").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-1_2").length) {
				var data = [
				   {
					value: 46,
					color: "#998675",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#bdb1a6",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-1_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-1_2").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-1_3").length) {
				var data = [
				   {
					value: 46,
					color: "#998675",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#bdb1a6",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#e2ddd9",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-1_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-1_3").innerHTML = myChart.generateLegend();
			}
		}
		
		if($(".full-pie-style").length) {
			if($("#fullchart-2_1").length) {
				var data = [
				   {
					value: 46,
					color: "#d49d19",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e3c16f",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#f0e3c2",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-2_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-2_1").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-2_2").length) {
				var data = [
				   {
					value: 46,
					color: "#d49d19",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e3c16f",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#f0e3c2",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-2_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-2_2").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-2_3").length) {
				var data = [
				   {
					value: 46,
					color: "#d49d19",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e3c16f",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#f0e3c2",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-2_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-2_3").innerHTML = myChart.generateLegend();
			}
		}
		
		if($(".full-pie-style").length) {
			if($("#fullchart-3_1").length) {
				var data = [
				   {
					value: 46,
					color: "#cf4900",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e08e62",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#efcebb",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-3_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-3_1").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-3_2").length) {
				var data = [
				   {
					value: 46,
					color: "#cf4900",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e08e62",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#efcebb",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-3_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-3_2").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-3_3").length) {
				var data = [
				   {
					value: 46,
					color: "#cf4900",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#e08e62",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#efcebb",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-3_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-3_3").innerHTML = myChart.generateLegend();
			}
		}
		
		if($(".full-pie-style").length) {
			if($("#fullchart-4_1").length) {
				var data = [
				   {
					value: 46,
					color: "#746455",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#aba198",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#d8d4d1",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-4_1").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-4_1").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-4_2").length) {
				var data = [
				   {
					value: 46,
					color: "#746455",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#aba198",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#d8d4d1",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-4_2").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-4_2").innerHTML = myChart.generateLegend();
			}
			if($("#fullchart-4_3").length) {
				var data = [
				   {
					value: 46,
					color: "#746455",
					label: "<b>46%</b> - Creative"
				}, {
					value: 29,
					color: "#aba198",
					label: "<b>29%</b> - Creative"
				}, {
					value: 25,
					color: "#d8d4d1",
					label: "<b>25%</b> - Creative"
				}];
				var options = {
					segmentShowStroke: false,
					animateRotate: true,
					animateScale: true,
					percentageInnerCutout: 0,
					tooltipTemplate: false
				}
				var ctx = document.getElementById("full-chart-4_3").getContext("2d");
				var myChart = new Chart(ctx).Doughnut(data, options);
				document.getElementById("full-js-legend-4_3").innerHTML = myChart.generateLegend();
			}
		}
	
	});/* document.ready /- */