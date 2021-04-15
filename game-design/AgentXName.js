function agent() {
    var setName = document.getElementById("AgentX").value;
    localStorage.setItem("AgentX", setName);
    window.open("AgentXObjects.html", "_self");
  }
  
  var nameButton = document.getElementById("nameButton");
  nameButton.addEventListener("click", agent);
  nameButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      validate(e);
    }
  });