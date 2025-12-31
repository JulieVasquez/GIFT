const noBtn = document.querySelector(".secondary");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

noBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  window.location.href = "secondlayer.html";
});

yesbtn.addEventListener("click", () => {
  window.location.href = "secondlayer.html";
});
