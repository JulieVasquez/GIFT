function unlock() {
  const correctPassword = "0201"; // 💌 cámbiala
  const input = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (input.toLowerCase() === correctPassword.toLowerCase()) {
    window.location.href = "final.html"; // 👉 tu siguiente página
  } else {
    error.textContent = "No es esa… pero sé que recuerdas nuestros números especiales.";
  }
}
