const init = () => {
  document.getElementById("create").addEventListener("click", create);
  document.getElementById("new").addEventListener("click", newButton);
};

const create = () => {
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let prompt = document.getElementById("prompt").value;
  let description = document.getElementById("description").value;
  let emotion = document.getElementById("emotion").value;
  let eintensity = document.getElementById("eintensity").value;
  let thought = document.getElementById("thought").value;
  let tintensity = document.getElementById("tintensity").value;
  let skill = document.getElementById("skill").value;
  let psintensity = document.getElementById("psintensity").value;

  const para = document.createElement("p", "id='cheese'");
  para.setAttribute("id", "outputp");
  para.innerHTML = `Date: ${date} Time: ${time} <br><br>
  Prompting Event: ${prompt} <br>
  Emotions Being Felt: ${description} <br><br>
  Emotions Being Felt: ${emotion} <br>
  Intensity of Emotions: ${eintensity} <br><br>
  Thoughts Being Felt: ${thought} <br>
  Intensity of Thoughts: ${tintensity} <br><br>
  Skills Used: ${skill} <br>
  Emotional Intensity after Skill: ${psintensity} <br><br>
  `;
  document.getElementById("output").prepend(para);
  document
    .getElementById("new")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

const newButton = () => {
  document
    .getElementById("eintensity")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

document.addEventListener("DOMContentLoaded", init);
