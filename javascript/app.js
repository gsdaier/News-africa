var newUrl = 'https://newsapi.org/v2/top-headlines?country=za&apiKey=1839035a72be4746ac708d34cc5d4608'

function fillTableWithParameters(tbl) {
    let url = new URL(document.location.href);
    url.searchParams.sort();
    let keys = url.searchParams.keys();
  
    for (let key of keys) {
      let val = url.searchParams.get(key);
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      cell.innerText = key;
      row.appendChild(cell);
      cell = document.createElement("td");
      cell.innerText = val;
      row.appendChild(cell);
      tbl.appendChild(row);
    };
  }
  
