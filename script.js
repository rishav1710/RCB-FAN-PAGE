"strict";
const btnVote = document.querySelector(".btn-vote");
btnVote.addEventListener("click", () => {
  if (
    document.getElementById("vk").checked ||
    document.getElementById("abd").checked ||
    document.getElementById("gm").checked
  ) {
    document.getElementById("result1").style.display = "block";
    document.getElementById("result2").style.display = "block";
    document.getElementById("result3").style.display = "block";
    btnVote.style.opacity = 0.2;
  } else {
    alert("SELECT ANY PLAYER");
  }
});

const btnFix = document.querySelector("#fixCheck");
btnFix.addEventListener("click", () => {
  document.getElementById("fix").style.display = "block";
});
const btnSqd = document.querySelector("#squad");
btnSqd.addEventListener("click", () => {
  document.getElementById("pla").style.display = "block";
});
const btnBra = document.querySelector("#brand");
btnBra.addEventListener("click", () => {
  document.getElementById("braa").style.display = "block";
});
