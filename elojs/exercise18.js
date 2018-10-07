
let url = "https://eloquentjavascript.net/author";
let accept = ["text/plain", "text/html", "application/json", 
              "application/rainbows+unicorns"];

async function getText(acc) {
  for (let a of acc) {
	let res = await fetch(url, {headers: {accept: a}}).then(t => t.text());
    console.log(res);
  }
}

getText(accept);