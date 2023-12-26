const card = document.querySelector("#imageHeroframe");
let tiltX = 0;
let tiltY = 0;

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const xPct = (mouseX / width) - 0.5;
  const yPct = (mouseY / height) - 0.5;

  tiltX = xPct * 17.5;
  tiltY = yPct * 17.5;

  updateTilt();
});

card.addEventListener("mouseenter", () => {
  card.querySelector("#imageHero").classList.add("active"); /* Trigger animation */
});

card.addEventListener("mouseleave", () => {
  tiltX = 0;
  tiltY = 0;
  updateTilt();
  card.querySelector("#imageHero").classList.remove("active"); /* Reset animation */
});

function updateTilt() {
  card.style.transform = `rotateX(${tiltY}deg) rotateY(${-tiltX}deg)`;
  requestAnimationFrame(updateTilt);
}
