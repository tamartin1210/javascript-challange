// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
// log the data in the console
console.log(data);
// step 1 loop through all the data row
data.forEach(function(mission){
	console.log(mission);
	
});
// use d3 to append one table row 'tr'
data.forEach(function(mission){
	console.log(mission);
	var row = tbody.append("tr");
});
// step 3 use 'object.entries' to console.log

 data.forEach(function(mission) {
   console.log(mission);
   var row = tbody.append("tr");

   Object.entries(mission).forEach(function([key, value]) {
     console.log(key, value);
   });
 });
// step 4 use d3 to append the data according to the one on fileCreatedDate
data.forEach(function(mission){
	console.log(mission);
	var row = tbody.append("tr");
	Object.entries(mission).forEach(function([key,value]){
		console.log(key,value);
	// append  cell to the row
	var cell = row.append("td");
	cell.text(value);
	});
})

//##############################################################################################################################################
// filtering part 
function buttonClick() {

	d3.event.preventDefault();
	 let date = d3.select("#datetime").property("value");
	 let filteredData = tableData;
	 if (date) {
	   filteredData = filteredData.filter(row => row.datetime === date);
	 }
	 mission(filteredData);
   }
   d3.selectAll("#filter-btn").on("click", buttonClick);
  // mission(tableData);
