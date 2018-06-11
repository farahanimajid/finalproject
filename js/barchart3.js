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

var svg3 = d3.select("#chart3").append("svg")
    .attr("width", width + margin3.left + margin3.right)
    .attr("height", height + margin3.top + margin3.bottom)
    .append("g")
    .attr("transform", "translate(" + margin3.left + "," + margin3.top + ")");

d3.csv("assets/mydata.csv", type, function(error, data) {
    x.domain(data.map(function(d) {
        return d.Year;
    }));
    y.domain(d3.extent(data, function(d) {
        return d.cost3;
    })).nice();


    svg3.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", function(d) {

            if (d.cost3 < 0){
                return "bar negative";
            } else {
                return "bar positive";
            }

        })
        .attr("data-yr", function(d){
            return d.Year;
        })
        .attr("data-c", function(d){
            return d.cost3;
        })
        .attr("title", function(d){
            return (d.Year + ": " + d.cost3 + " cost3")
        })
        .attr("y", function(d) {

            if (d.cost3 > 0){
                return y(d.cost3);
            } else {
                return y(0);
            }

        })
        .attr("x", function(d) {
            return x(d.Year);
        })
        .attr("width", x.rangeBand())
        .attr("height", function(d) {
            return Math.abs(y(d.cost3) - y(0));
        })
        .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.cost3 + " cost3");
            d3.select("#_yr")
                .text("Year: " + d.Year);
            d3.select("#degrree")
                .text(d.cost3 + "cost3");
        });

    svg3.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg3.append("g")
        .attr("class", "y axis")
        .append("text")
        .text("cost3")
        .attr("transform", "translate(15, 40), rotate(-90)")

    svg3.append("g")
        .attr("class", "X axis")
        .attr("transform", "translate(" + (margin3.left - 6.5) + "," + height + ")")
        .call(xAxis);

    svg3.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", y(0))
        .attr("y2", y(0))
        .attr("x2", width);

    svg3.append("g")
        .attr("class", "infowin")
        .attr("transform", "translate(50, 5)")
        .append("text")
        .attr("id", "_yr");

    svg3.append("g")
        .attr("class", "infowin")
        .attr("transform", "translate(110, 5)")
        .append("text")
        .attr("id","degrree");

});


function type(d) {
    d.cost3 = +d.cost3;
    return d;
}
