// Create the elements for the first name page
d3.select("div#firstName")
  .selectAll("h2")
    .data(employees)
    .enter()
  .append("h2")
    .text(function(employee) { return employee.firstName; });

// Create the elements for the full name page
d3.select("div#fullName")
  .selectAll("h2")
    .data(employees)
    .enter()
  .append("h2")
    .text(function(employee) { return (employee.firstName + ' ' + employee.lastName); });

// Create the elements for the numbered name page
d3.select("#number-list")
  .selectAll("li")
    .data(employees)
    .enter()
  .append("li")
    .text(function(employee) { return (employee.lastName); });

// Create the elements for the numbered name page
d3.select("#photoBook")
  .selectAll("img")
    .data(employees)
    .enter()
  .append("img")
    .attr("src", function(employee) { return (employee.photo); });

// Create the elements for the table page
var rows = d3.select("#teacherTable tbody")
  .selectAll("tr")
    .data(employees)
    .enter()
      .append("tr");

// add photo
rows.append("td")
    .append("img")
    .attr("src", function(employee) { return (employee.photo); });

// add names
rows.append("td")
    .text(function(employee) { return (employee.firstName + ' ' + employee.lastName); });