function levelOne() {
    var setVerb = document.getElementById("verb").value;
    localStorage.setItem("verb", setVerb);
    var setLocation = document.getElementById("location").value;
    localStorage.setItem("location", setLocation);
    var setTime = document.getElementById("time").value;
    localStorage.setItem("time", setTime);
    window.open("Level1Output.html", "_self");
  }
  
  var level1Output = document.getElementById("level1Output");
  level1Output.addEventListener("click", levelOne);
  level1Output.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      validate(e);
    }
  });