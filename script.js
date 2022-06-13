let areatext = document.getElementById("area");

function PressButton() {
  let usermsg = document.getElementById("text").value;
  if (usermsg != "") {
    areatext.textContent += "Eu: " + usermsg + "\n";
    document.getElementById("text").value = "";
    areatext.scrollTop += 1000000;
  }
}

function PressEnter(e) {
  if (e.key == "Enter") {
    PressButton();
  }
}

function ClearArea() {
  areatext.textContent = "";
}

document.getElementById("enviar").addEventListener("click", PressButton);
document.getElementById("limpar").addEventListener("click", ClearArea);
document.getElementById("text").addEventListener("keypress", PressEnter);
