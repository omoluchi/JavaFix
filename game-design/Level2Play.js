function levelTwo() {
    var setVerbS1 = document.getElementById("verbS1").value;
    localStorage.setItem("verbS1", setVerbS1);
    var setcontraptionS1 = document.getElementById("contraptionS1").value;
    localStorage.setItem("contraptionS1", setcontraptionS1);
    var setVerbS2 = document.getElementById("verbS2").value;
    localStorage.setItem("verbS2", setVerbS2);
    var setcontraptionS2 = document.getElementById("contraptionS2").value;
    localStorage.setItem("contraptionS2", setcontraptionS2);
    var setVerbS3 = document.getElementById("verbS3").value;
    localStorage.setItem("verbS3", setVerbS3);
    var setcontraptionS3 = document.getElementById("contraptionS3").value;
    localStorage.setItem("contraptionS3", setcontraptionS3);
    window.open("Level2Output.html", "_self");
  }
  
  var level1Output = document.getElementById("levelTwo");
  level1Output.addEventListener("click", levelTwo);
  level1Output.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      validate(e);
    }
  });