var margin14 = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 20
    },
    width = 350 - margin14.left - margin14.right,
    height = 200 - margin14.top - margin14.bottom;

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

var svg11 = d3.select("#chart11").append("svg")
    .attr("width", width + margin14.left + margin14.right)
    .attr("height", height + margin14.top + margin14.bottom)
    .append("g")
    .attr("transform", "translate(" + margin14.left + "," + margin14.top + ")");

d3.csv("assets/mydata.csv", type, function(error, data) {
    x.domain(data.map(function(d) {
        return d.Year;
    }));
    y.domain(d3.extent(data, function(d) {
        return d.cost11;
    })).nice();


    svg11.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", function(d) {

            if (d.cost11 < 0){
                return "bar negative";
            } else {
                return "bar positive";
            }

        })
        .attr("data-yr", function(d){
            return d.Year;
        })
        .attr("data-c", function(d){
            return d.cost11;
        })
        .attr("title", function(d){
            return (d.Year + ": " + d.cost11 + " cost11")
        })
        .attr("y", function(d) {

            if (d.cost11 > 0){
                return y(d.cost11);
            } else {
                return y(0);
            }

        })
        .attr("x", function(d) {
            return x(d.Year);
        })
        .attr("width", x.rangeBand())
        .attr("height", function(d) {
            return Math.abs(y(d.cost11) - y(0));
        })
        .on("mouseover", function(d){
            // alert("Year: " + d.Year + ": " + d.cost11 + " cost11");
            d3.select("#_yr")
                .text("Year: " + d.Year);
            d3.select("#degrree")
                .text(d.cost11 + "cost11");
        });

    svg11.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg11.append("g")
        .attr("class", "y axis")
        .append("text")
        .text("cost11")
        .attr("transform", "translate(15, 40), rotate(-90)")

    svg11.append("g")
        .attr("class", "X axis")
        .attr("transform", "translate(" + (margin14.left - 6.5) + "," + height + ")")
        .call(xAxis);

    svg11.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", y(0))
        .attr("y2", y(0))
        .attr("x2", width);

    svg11.append("g")
        .attr("class", "infowin")
        .attr("transform", "translate(50, 5)")
        .append("text")
        .attr("id", "_yr");

    svg11.append("g")
        .attr("class", "infowin")
        .attr("transform", "translate(110, 5)")
        .append("text")
        .attr("id","degrree");

});


function type(d) {
    d.cost11 = +d.cost11;
    return d;
}

