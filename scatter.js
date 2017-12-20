function init() {
	var data = [{
		x: qbData.map(row => row.adjPA),
		y: qbData.map(row => row.adjPF),
		mode: 'markers',
		type: 'scatter',
		text: matchups,
		marker: {size: 20,
				color: qbData.map(row => row.Proj),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
				},
		hoverinfo: 'text',
		hoverlabel: {bgcolor: 'black', bordercolor: 'white'},
		fillcolor: "black"
	}];

	var layout = {
	  xaxis: {
	    title: 'Defense - Adjusted QB Points Allowed'
	  },
	  yaxis: {
	    title: 'QB - Adjusted Points Scored'
	  },
	  title:'Week 16 QB Projections (hover for QB + matchup info)',
	  hovermode: 'closest'
	};

	var PLOT = document.getElementById("plot");

	Plotly.plot("plot", data, layout);

	function renderTable1() {
		$tbody.innerHTML = "";
		for (var x = 0; x < qbData.length; x++) {
			var qb = qbData[x];
			var fields = Object.keys(qb);
			var $row = $tbody.insertRow(x);
			for (var y = 0; y < 6; y++) {
				var field = fields[y];
				var $cell = $row.insertCell(y);
				$cell.innerHTML = qb[field]
			}
		}
	}

	function renderTable2() {
		$tbody.innerHTML = "";
		for (var x = 0; x < fd1qbData.length; x++) {
			var qb = fd1qbData[x];
			var fields = Object.keys(qb);
			var $row = $tbody.insertRow(x);
			for (var y = 0; y < 6; y++) {
				var field = fields[y];
				var $cell = $row.insertCell(y);
				$cell.innerHTML = qb[field]
			}
		}
	}

	function renderTable3() {
		$tbody.innerHTML = "";
		for (var x = 0; x < fd2qbData.length; x++) {
			var qb = fd2qbData[x];
			var fields = Object.keys(qb);
			var $row = $tbody.insertRow(x);
			for (var y = 0; y < 6; y++) {
				var field = fields[y];
				var $cell = $row.insertCell(y);
				$cell.innerHTML = qb[field]
			}
		}
	}

	// Find a <table> element with id="myTable":
	var $tbody = document.querySelector("tbody");
	renderTable1()
};

function updatePlotly(newX, newY, newText, newMarker, newXtitle, newYtitle) {
	console.log(newX, newY, newText, newMarker, newXtitle, newYtitle)
	var PLOT = document.getElementById("plot");

	Plotly.restyle("plot", "x", [newX]);
	Plotly.restyle("plot", "y", [newY]);
	Plotly.restyle("plot", "text", [newText]);
	Plotly.restyle("plot", "marker", [newMarker]);
	Plotly.relayout("plot", "xaxis.title", newXtitle);
	Plotly.relayout("plot", "yaxis.title", newYtitle);
}

function getData(dataset) {
	var x = [];
	var y = [];
	var text = [];
	var marker = {};
	var xtitle = "";
	var ytitle = "";

	switch(dataset) {
		case "dataset1":
			x = qbData.map(row => row.adjPA);
			y = qbData.map(row => row.adjPF);
			text = matchups;
			marker = {size: 20,
				color: qbData.map(row => row.Proj),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = 'Defense - Adjusted QB Points Allowed';
			ytitle = 'QB - Adjusted Points Scored';
			function renderTable1() {
				$tbody.innerHTML = "";
				for (var x = 0; x < qbData.length; x++) {
					var qb = qbData[x];
					var fields = Object.keys(qb);
					var $row = $tbody.insertRow(x);
					for (var y = 0; y < 6; y++) {
						var field = fields[y];
						var $cell = $row.insertCell(y);
						$cell.innerHTML = qb[field]
					}
				}
			};
			var $tbody = document.querySelector("tbody");
			renderTable1();
			break;

		case "dataset2":
			x = fd1qbData.map(row => row.Price);
			y = fd1qbData.map(row => row.Proj);
			text = fd1matchups;
			marker = {size: 20,
				color: fd1qbData.map(row => row.Proj),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = 'FanDuel Price ($)';
			ytitle = 'Projected Points';
			function renderTable2() {
				$tbody.innerHTML = "";
				for (var x = 0; x < fd1qbData.length; x++) {
					var qb = fd1qbData[x];
					var fields = Object.keys(qb);
					var $row = $tbody.insertRow(x);
					for (var y = 0; y < 6; y++) {
						var field = fields[y];
						var $cell = $row.insertCell(y);
						$cell.innerHTML = qb[field]
					}
				}
			};
			var $tbody = document.querySelector("tbody");
			renderTable2();
			break;

		case "dataset3":
			x = fd2qbData.map(row => row.Price);
			y = fd2qbData.map(row => row.Proj);
			text = fd2matchups;
			marker = {size: 20,
				color: fd2qbData.map(row => row.Proj),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = 'FanDuel Price ($)';
			ytitle = 'Projected Points';
			function renderTable3() {
				$tbody.innerHTML = "";
				for (var x = 0; x < fd2qbData.length; x++) {
					var qb = fd2qbData[x];
					var fields = Object.keys(qb);
					var $row = $tbody.insertRow(x);
					for (var y = 0; y < 6; y++) {
						var field = fields[y];
						var $cell = $row.insertCell(y);
						$cell.innerHTML = qb[field]
					}
				}
			};
			var $tbody = document.querySelector("tbody");
			renderTable3();
			break;

		default:
			x = qbData.map(row => row.adjPA);
			y = qbData.map(row => row.adjPF);
			text = matchups;
			marker = {size: 20,
				color: qbData.map(row => row.Proj),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = 'Defense - Adjusted QB Points Allowed';
			ytitle = 'QB - Adjusted Points Scored';
			function renderTable1() {
				$tbody.innerHTML = "";
				for (var x = 0; x < qbData.length; x++) {
					var qb = qbData[x];
					var fields = Object.keys(qb);
					var $row = $tbody.insertRow(x);
					for (var y = 0; y < 6; y++) {
						var field = fields[y];
						var $cell = $row.insertCell(y);
						$cell.innerHTML = qb[field]
					}
				}
			};
			var $tbody = document.querySelector("tbody");
			renderTable1();
			break;
	}

	updatePlotly(x, y, text, marker, xtitle, ytitle)
}

init();