const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");

envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";
});
