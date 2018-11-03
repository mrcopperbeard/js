var data = {
    name: "Всего"
};

var depthMap = [
    "Область",
    "Подгруппа",
    "Автор"
];

function addRow(obj, row, depth) {
    if (depth === depthMap.length) {
        if (!obj.size) {
            obj.size = 0;
            obj.inventions = [];
            obj.isLeaf = true;
        }

        obj.size++;
        obj.inventions.push(row["Название"])

        return;
    }

    var item = row[depthMap[depth]];
    obj[item] = obj[item] || {
        name: item
    };

    addRow(obj[item], row, depth + 1);
};

function getChildren(obj) {
    if (obj.isLeaf) {
        return null;
    }

    var result = [];
    Object.keys(obj).forEach(key => {
        if (key !== "name") {
            result.push(obj[key]);
        }
    });

    return result;
}

for (var i = 0; i < datasource.length; i++) {
    addRow(data, datasource[i], 0);
}

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var format = d3.format(",d");

var pack = d3.pack()
    .size([width - 2, height - 2])
    .padding(3);


    var root = d3.hierarchy(data, getChildren)
        .sum(function(d) { return d.size; })
        .sort(function(a, b) { return b.value - a.value; });

pack(root);

var node = svg.select("g")
  .selectAll("g")
  .data(root.descendants())
  .enter().append("g")
    .attr("transform", function(d) { console.log(d); return "translate(" + d.x + "," + d.y + ")"; })
    .attr("class", function(d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
    .each(function(d) { d.node = this; })
    .on("mouseover", hovered(true))
    .on("mouseout", hovered(false));

node.append("circle")
    .attr("id", function(d, i) { return "node-" + i; })
    .attr("r", function(d) { return d.r; });

var leaf = node.select(function(d) { return !d.children ? this : null; })
    .classed("node--leaf", true)
  .select(function(d) { return d.data.name ? this : null; });

leaf.append("clipPath")
    .attr("id", function(d, i) { return "clip-" + i; })
  .append("use")
    .attr("xlink:href", function(d, i) { return "#node-" + i + ""; });

leaf.append("text")
    .style("font-size", function(d) { return Math.sqrt(d.r) * 2 + "px"; })
    .attr("clip-path", function(d, i) { return "url(#clip-" + i + ")"; })
  .selectAll("tspan")
    .data(function(d) { return d.data.name.split(/\s+/g); })
  .enter().append("tspan")
    .attr("x", 0)
    .attr("y", function(d, i, nodes) { return 1.3 + (i - nodes.length / 2 - 0.5) + "em"; })
    .text(function(d) { return d; });

node.append("title")
    .text(function(d) {
         return (d.data.name || "N/A") + "\n" + (d.data.isLeaf ? d.data.inventions.join("\n") + "\n" : format(d.value));
    });
    
function hovered(hover) {
  return function(d) {
    d3.selectAll(d.ancestors()
        .map(function(d) { return d.node; }))
      .classed("node--hover", hover);
  };
}