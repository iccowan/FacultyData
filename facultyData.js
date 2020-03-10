// Create the elements for the first name page
d3.select("div#firstName")
  .selectAll("h2")
    .data(employees)
    .enter()
  .append("h2")
    .text(function(employee) { return employee.firstName; });