function item() {
    var setAlpha = document.getElementById("Alpha").value;
    localStorage.setItem("Alpha", setAlpha);
    var setBeta = document.getElementById("Beta").value;
    localStorage.setItem("Beta", setBeta);
    var setGamma = document.getElementById("Gamma").value;
    localStorage.setItem("Gamma", setGamma);
    window.open("Level1Start.html", "_self");
  }
  
  var objectButton = document.getElementById("objectButton");
  objectButton.addEventListener("click", item);
  objectButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      validate(e);
    }
  });