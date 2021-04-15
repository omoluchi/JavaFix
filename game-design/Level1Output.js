function Embodiment() {
    var name = localStorage.getItem("AgentX");
    var embodimentDiv = document.getElementById("output");
    var alpha = localStorage.getItem("Alpha");
    var verb = localStorage.getItem("verb");
    var location = localStorage.getItem("location");
    var time = localStorage.getItem("time");
    embodimentDiv.innerHTML =
      "<h3> Embodiment Story </h3>" +
      "<div> Agent <b>" +
      name +
      "</b> knew something was wrong the moment they awoke in the <b>" +
      location +
      "</b>. they had not meant to shift there, they didn’t even know where they were. 'Something’s wrong,'they said. They stumbled around for <b>" +
      time +
      "</b> trying to figure out what had brought them there. Suddenly, as if to spite any worldy physics, the entire world began <b>" +
      verb +
      "</b> around Agent <B>" +
      name +
      "</b>, a forced shift in the multiverse. They reached out, trying to see the cause, but all they saw was a grotesque <b>" +
      alpha +
      "</b>.</div>" +
      "<div> <p> When everyone has shared their universe, continue to the next act! </p>" +
      "<a href=level2Start.html><button>Next Level</button></a></div>";
  }
  
  window.onload = Embodiment();