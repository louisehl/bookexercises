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


//13.2

<!doctype html>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    let arr = [];
    for (let i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].nodeName == tagName.toUpperCase()) {
        arr.push(node.childNodes[i].nodeName);
      }
      let next = byTagName(node.childNodes[i], tagName);
      if (next.length > 0) {
      	arr = arr.concat(next);
      }
    }
    return arr;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>

//13.3

<!doctype html>

<style>body { min-height: 200px }</style>
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 40) + 100 + "px";
    cat.style.left = (Math.cos(angle) * 200 + 230) + 100 + "px";

    hat.style.top = ((Math.sin(angle) * 40 + 40) - Math.sin(angle) * 80) + 100 + "px";
    hat.style.left = ((Math.cos(angle) * 200 + 230) - Math.cos(angle) * 80) + 100 + "px";


    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>
