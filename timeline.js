var dictionary = {};
var maxYear = 0;
var minYear = 9999;
var maxCount = 0;

for (var i = 0; i < datasource.length; i++) {
    var source = datasource[i];
    var year = source["Год"];
    if (!!dictionary[year]) {
        dictionary[year].count++;
        dictionary[year].description += (", " + source["Название"]);
        
        if (dictionary[year].count > maxCount) {
            maxCount = dictionary[year].count;
        }
    } else {
        var intYear = parseInt(year, 10);
        if (intYear < minYear) {
            minYear = intYear;
        }

        if (intYear > maxYear) {
            maxYear = intYear;
        }

        dictionary[year] = {
            year: intYear,
            count: 1,
            description: source["Название"]
        }
    }
}

var dataset = Object.values(dictionary);

// 2. Use the margin convention practice 
var margin = {top: 50, right: 50, bottom: 50, left: 50}
  , width = window.innerWidth - margin.left - margin.right // Use the window's width 
  , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

// 5. X scale will use the index of our data
var xScale = d3.scaleLinear()
    .domain([minYear, maxYear]) // input
    .range([0, width]); // output

// 6. Y scale will use the randomly generate number 
var yScale = d3.scaleLinear()
    .domain([0, maxCount]) // input 
    .range([height, 0]); // output 

// 7. d3's line generator
var line = d3.line()
    .x(function(d) { return xScale(d.year); }) // set the x values for the line generator
    .y(function(d) { return yScale(d.count); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX) // apply smoothing to the line

// 1. Add the SVG to the page and employ #2
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 3. Call the x axis in a group tag
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale)
        .tickFormat(d3.format("d"))); // Create an axis component with d3.axisBottom

// 4. Call the y axis in a group tag
svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale)
        .ticks(1)); // Create an axis component with d3.axisLeft

// 9. Append the path, bind the data, and call the line generator 
svg.append("path")
    .datum(dataset) // 10. Binds data to the line 
    .attr("class", "line") // Assign a class for styling 
    .attr("d", line); // 11. Calls the line generator 

// Define the div for the tooltip
var tooltipDiv = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

// 12. Appends a circle for each datapoint 
svg.selectAll(".dot")
    .data(dataset)
  .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot tooltip") // Assign a class for styling
    .attr("cx", function(d) { return xScale(d.year) })
    .attr("cy", function(d) { return yScale(d.count) })
    .attr("r", 5)
    .on("mouseover", function(d) {		
        tooltipDiv.transition()		
            .duration(200)		
            .style("opacity", .9);		
        tooltipDiv.html(d.description)	
            .style("height", d.count * 28 + 'px')
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");	
        })					
    .on("mouseout", function(d) {		
        tooltipDiv.transition()		
            .duration(500)		
            .style("opacity", 0);	
    });