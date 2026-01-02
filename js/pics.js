const stories = [
  {
    image: "images/pic1.png",
    title: "Tu sonrisa",
    desc: "Tu sonrisa tiene algo especial: aparece cuando menos lo espero y, sin hacer ruido, arregla mis días. Es ese pequeño milagro que me recuerda que todo va a estar bien, incluso cuando el mundo se siente pesado."
  },
  {
    image: "images/pic2.png",
    title: "Tu forma de hablarme",
    desc: "Hay algo en tu manera de decir mi nombre, en cómo eliges tus palabras conmigo, que convierte cualquier lugar en hogar. Aunque estemos lejos, tu voz siempre sabe cómo abrazarme."
  },
  {
    image: "images/pic3.png",
    title: "Tu paciencia",
    desc: "Admiro tu paciencia más de lo que imaginas. Incluso en los días complicados, cuando todo parece confuso, eliges quedarte, escuchar y comprender. Eso dice más de tu amor que mil promesas."
  },
  {
    image: "images/pic4.png",
    title: "Cómo me haces sentir",
    desc: "Contigo me siento amada de verdad. Me siento segura, elegida y tranquila. A tu lado, aunque sea a la distancia, he aprendido que el amor también puede ser paz."
  },
  {
    image: "images/pic5.png",
    title: "Nosotras",
    desc: "Somos dos corazones separados por kilómetros, pero unidos por algo mucho más fuerte. A veces lejos, a veces cansadas, pero siempre latiendo al mismo ritmo, eligiéndonos todos los días. No hay Julie sin Romina."
  }
];




let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= stories.length) {
    currentIndex = 0;
  }

  document.getElementById("storyImage").src = stories[currentIndex].image;
  document.getElementById("storyTitle").innerText = stories[currentIndex].title;
  document.getElementById("storyDesc").innerText = stories[currentIndex].desc;
}


  function togglePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  }

