//15.1

<!doctype html>

<p>🎈</p>

<script>
  let balloon = document.querySelector("p");
  let size = 10;

  function arrow(event) {
  	if (event.key == "ArrowUp") {
      if (size > 100) {
        balloon.textContent ="💥";
        window.removeEventListener("keydown", arrow);
      }
      else {
        balloon.style.fontSize = newSize(size * 1.05);
      }
    }
    if (event.key == "ArrowDown") {
      balloon.style.fontSize = newSize(size * 0.95);
    }
    event.preventDefault();
  }

  function newSize(s) {
    size = s;
    console.log(s);
    return size + "px";
  }

  window.addEventListener("keydown", arrow);
</script>


//15.2

<!doctype html>

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  window.addEventListener("mousemove", event => {
    let trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = (event.clientX + 5) + "px";
    trail.style.top = (event.clientY + 5) + "px";
    document.body.appendChild(trail);
    setTimeout(() => {
      document.body.removeChild(trail);
    }, 500);
  });
</script>
