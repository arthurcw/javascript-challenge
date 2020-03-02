// from data.js
var tableData = data;

// filter table button and click listener
var button = d3.select("#filter-btn");
button.on("click", handleClick);

// input field
let form = d3.select("form");
form.on("submit", () => {
  d3.event.preventDefault();
  handleClick();
});

// Function to handle clicks
function handleClick() {
    // prevent page from reloading
    // d3.event.preventDefault();

    // Select the input element and get the property
    let inputValue = d3.select("#datetime").property("value");

    // Use the input to filter the data by date
    let dataFiltered = tableData.filter((row) => row.datetime === inputValue);
    console.log(dataFiltered.length);

    // Select the tbody
    let tbody = d3.select("#ufo-table").select("tbody");

    // clear contents in tbody before adding new contents
    tbody.selectAll("tr").remove();

    // Add filtered data to html table
    if (dataFiltered.length > 0) {
        dataFiltered.forEach((row) => {
            // add new row
            let nRow = tbody.append("tr");
    
            // add td
            Object.entries(row).forEach(entry=> {
                nRow.append("td").text(entry[1]);
            })
    
        })
    } else {
        // no data
        tbody.append("tr").append("td").text("No data");
    }

    



    




    // console.log("it is clicked");
}

