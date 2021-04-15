function Sound() {
    var noiseDiv = document.getElementById("noiseDiv");
    var name = localStorage.getItem("AgentX");
    var beta = localStorage.getItem("Beta");
    var verbS1 = localStorage.getItem("verbS1");
    var verbS2 = localStorage.getItem("verbS2");
    var verbS3 = localStorage.getItem("verbS3");
    var contraptionS1 = localStorage.getItem("contraptionS1");
    var contraptionS2 = localStorage.getItem("contraptionS2");
    var contraptionS3 = localStorage.getItem("contraptionS3");
    noiseDiv.innerHTML =
      "<h3> Noise Story! </h3>" +
      "<div> Agent <b>" +
      name +
      "</b> knew something had to be done.'This can’t be a coincidence,' they said. Immediately,they began to look for ways to piece it together. It took hours of <b>" +
      verbS2 +
      "</b> until they found signs of Crucius’ <b>" +
      contraptionS1 +
      "</b>. This foul machine was <b>" +
      verbS3 +
      "</b> the nearby area, but Agent <b>" +
      name +
      "</b> knew this was only a piece of the puzzle. 'I haven’t seen something so complex in ages,' they said. they took out their trusty <b>" +
      contraptionS2 +
      "</b> and began <b>" +
      verbS1 +
      "</b> in order to clear the dimensional static. However, they immediately found themselves standing in the middle of a <b>" +
      contraptionS3 +
      "</b>. It was all wrong. They thought they were going to find some mystic <b>" +
      beta +
      "</b>. </div> <div> <p> When everyone has shared their universe, continue to the next act! </p>" +
      "<a href=Level3Start.html><button>Next Level</button></a></div>";
  }
  
  window.onload = Sound();