function Memory() {
    var memoryDiv = document.getElementById("memoryStory");
    var name = localStorage.getItem("AgentX");
    var gamma = localStorage.getItem("Gamma");
    var feeling1 = localStorage.getItem("feeling1");
    var feeling2 = localStorage.getItem("feeling2");
    var feeling3 = localStorage.getItem("feeling3");
    var contraptionM1 = localStorage.getItem("contraptionM1");
    var contraptionM2 = localStorage.getItem("contraptionM2");
    var contraptionM3 = localStorage.getItem("contraptionM3");
    memoryDiv.innerHTML =
      "<h3> Memory Mash! </h3> <div> <p> Agent <b>" +
      name +
      "</b> paced back and forth. They felt <b>" +
      feeling3 +
      "</b> that they had played directly into Crucius’ hands, but they were not beaten yet. While they hadn’t seen anything like Crucius’s <b>" +
      contraptionM2 +
      "</b> before, they weren't out of options. While Crucius ranted about their victory, Agent <b>" +
      name +
      "</b> felt <b>" +
      feeling1 +
      "</b>. They reached into their pocket and produced a <b>" +
      contraptionM3 +
      "</b>. It wasn’t much, but it could buy them a split second to break away. 'Sorry to leave early,' they said, sprinting away. Crucius followed, 'You won’t escape that easily,' they snarled, quickly cornering Agent <b>" +
      name +
      "</b> once again. They felt <b>" +
      feeling2 +
      "</b>. They had one last ace up their sleeve, a <b>" +
      contraptionM1 +
      "</b>. Handling it carefully, they drew energy from across the dimensions and with a terrible popping sound, Crucius disappeared, locked away in a simple <b>" +
      gamma +
      "</b>, safely in another world. </div> <div> <a href=AgentXConclusion.html><button> End Story </button></div>";
  }
  
  window.onload = Memory();