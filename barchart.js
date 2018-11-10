/*
*    Barcode.js
* 
*/

// read in the data and convert to numbers
d3.json('data/buildings.json').then(function(data) {	data.forEach(function(d){
		d.height= +d.height;

		console.log(d);
  });
	// creating a linear scale
	var x = d3.scaleLinear()
		.domain([0, 828])
		.range([0, 400])
	
	// draw the canvas inside the div with chart id
	var svg = d3.select("#chart")
		.append("svg")
		.attr("width", 400)
		.attr("height", 400);

	// select all the rectangle elements and attach the data to it
	var rects = svg.selectAll('rect')
		.data(data);

	// loop throgh the data and plot the rectangles
	rects.enter()
		.append('rect')
		    .attr('x', 20)
		    .attr('y', (d, i) => {
		    	return (i*60)+25;
		    })
		    .attr('width', (d) =>{
		    	return x(d.height);
		    })
		    .attr('height', 50)
		    .attr('fill', '#ffd2da');

	// draw the black line where the barchart starts.
	svg.append('rect')
		.attr('x', 10)
		.attr('y', 25)
		.attr('width', 3)
		.attr('height', 290)
		.attr('fill', 'black');
})
