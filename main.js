var btn = document.querySelector("button");

function toggle() {
  if (btn.innerHTML === "Dark mode") {
    document.querySelector("p").style.color = "#fff";
    document.querySelector("#about").style.color = "#fff";
    document.querySelector("#contactMe").style.color = "#fff";
    document.querySelector("h1").style.color = "#fff";
    document.querySelector("button").style.color = "#000";
    document.querySelector("button").style.background = "#fff";
    document.querySelector("body").style.background = "#000";
    document.querySelector("button").innerHTML = "Light mode";
    document.querySelector("button").style.borderStyle = "none";
  } else if (btn.innerHTML === "Light mode") {
    document.querySelector("p").style.color = "#000";
    document.querySelector("#about").style.color = "#000";
    document.querySelector("#contactMe").style.color = "#000";
    document.querySelector("h1").style.color = "#000";
    document.querySelector("button").style.color = "#000";
    document.querySelector("button").style.background = "#f2f2f2";
    document.querySelector("body").style.background = "#fff";
    document.querySelector("button").innerHTML = "Dark mode";
  }
}

btn.addEventListener("click", toggle);
