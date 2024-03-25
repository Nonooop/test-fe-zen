document.addEventListener("DOMContentLoaded", function() {
    const dataTable = document.getElementById("data-table");
    const headers = dataTable.querySelectorAll("th");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            sortTable(header.cellIndex);
        });
    });

    function sortTable(columnIndex) {
        const table = dataTable.querySelector("tbody");
        const rows = Array.from(table.querySelectorAll("tr"));
        const isAscending = rows[0].querySelectorAll("td")[columnIndex].textContent > rows[1].querySelectorAll("td")[columnIndex].textContent;
        
        rows.sort((a, b) => {
            const aData = a.querySelectorAll("td")[columnIndex].textContent;
            const bData = b.querySelectorAll("td")[columnIndex].textContent;
            return isAscending ? aData.localeCompare(bData) : bData.localeCompare(aData);
        });
        
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
        
        rows.forEach(row => {
            table.appendChild(row);
        });
    }
});
