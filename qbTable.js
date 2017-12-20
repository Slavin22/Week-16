// Find a <table> element with id="myTable":
var $tbody = document.querySelector("tbody");

function renderTable() {
	$tbody.innerHTML = "";
	for (var x = 0; x < qbData.length; x++) {
		var qb = qbData[x];
		var fields = Object.keys(qb);
		var $row = $tbody.insertRow(x);
		for (var y = 0; y < fields.length; y++) {
			var field = fields[y];
			var $cell = $row.insertCell(y);
			$cell.innerHTML = qb[field]
		}
	}
}

renderTable()