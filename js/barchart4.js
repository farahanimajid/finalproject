var margin3 = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 20
    },
    width = 350 - margin3.left - margin3.right,
    height = 200 - margin3.top - margin3.bottom;

var y = d3.scale.linear()
    .range([height, 0]);

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .5);


var xAxisScale = d3.scale.linear()
    .domain([0, 15])
    .range([ 0, width]);

var xAxis = d3.svg.axis()
    .scale(xAxisScale)
    .orient("bottom")
    .tickFormat(d3.format("d"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg4 = d3.select("#chart4").append("svg")
    .attr("width", width + margin3.left + margin3.right)
    .attr("height", height + margin3.top + margin3.bottom)
    .append("g")
    .attr("transform", "translate(" + margin3.left + "," + margin3.top + ")");

d3.csv("assets/mydata.csv", type, function(error, data) {
    x.domain(data.map(function(d) {
        return d.Year;
    }));
    y.domain(d3.extent(data, function(d) {
        return d.cost4;
    })).nice();


    svg4.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", function(d) {

            if (d.cost4 < 0){
                return "bar negative";
            } else {
                return "bar positive";
            }

        })
        .attr("data-yr", function(d){
            return d.Year;
        })
        .attr("data-c", function(d){
            return d.cost4;
        })
        .attr("title", function(d){
            return (d.Year + ": " + d.cost4 + " cost4")
        })
        .attr("y", function(d) {

            if (d.cost4 > 0){
                return y(d.cost4);
            } else {
                return y(0);
            }

        })
        .attr("x", function(d) {
            return x(d.Year);
        })
        .attr("width", x.rangeBand())
        .attr("height", function(d) {
            return Math.abs(y(d.cost4) - y(0));
        })
        .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.cost4 + " cost4");
            d3.select("#_yr")
                .text("Year: " + d.Year);
            d3.select("#degrree")
                .text(d.cost4 + "cost4");
        });

    svg4.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg4.append("g")
        .attr("class", "y axis")
        .append("text")
        .text("cost4")
        .attr("transform", "translate(15, 40), rotate(-90)")

    svg4.append("g")
        .attr("class", "X axis")
        .attr("transform", "translate(" + (margin3.left - 6.5) + "," + height + ")")
        .call(xAxis);

    svg4.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", y(0))
        .attr("y2", y(0))
        .attr("x2", width);

    svg4.append("g")
        .attr("class", "infowin")
        .attr("transform", "translate(50, 5)")
        .append("text")
        .attr("id", "_yr");

    svg4.append("g")
        .attr("class", "infowin")
        .attr("transform", "translate(110, 5)")
        .append("text")
        .attr("id","degrree");

});


function type(d) {
    d.cost4 = +d.cost4;
    return d;
}
