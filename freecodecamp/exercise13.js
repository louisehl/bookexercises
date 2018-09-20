//13.1

<!doctype html>

<meta charset="utf8">

<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  let table = document.createElement("table");
  let trh = document.createElement("tr");
  let keys = Object.keys(MOUNTAINS[0]);
  for (let i in keys) {
    let th = document.createElement("th");
    let text = document.createTextNode(keys[i]);
    th.appendChild(text);
    trh.appendChild(th);
  }
  table.appendChild(trh);
  for (let i in MOUNTAINS) {
    let trd = document.createElement("tr");
    let elName = document.createElement("td");
    let teName = document.createTextNode(MOUNTAINS[i].name);
    elName.appendChild(teName);
    trd.appendChild(elName);
    let elHeight = document.createElement("td");
    let teHeight = document.createTextNode(MOUNTAINS[i].height);
    elHeight.appendChild(teHeight);
    trd.appendChild(elHeight);
    let elPlace = document.createElement("td");
    let tePlace = document.createTextNode(MOUNTAINS[i].place);
    elPlace.appendChild(tePlace);
    trd.appendChild(elPlace);
    table.appendChild(trd);
  }
  document.getElementById("mountains").appendChild(table);
</script>
