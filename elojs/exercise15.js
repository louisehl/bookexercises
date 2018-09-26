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
