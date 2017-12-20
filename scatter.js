var trace1 = {
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
}

var data = [trace1];

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

Plotly.newPlot("plot", data, layout)

renderTable()