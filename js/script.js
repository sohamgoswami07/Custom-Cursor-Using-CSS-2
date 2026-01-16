const isCursorSupported =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const cursor = document.querySelector(".cursor-lottie");

// Always load Lottie (desktop + mobile)
lottie.loadAnimation({
  container: cursor,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/Fire.json",
});

// Desktop-only cursor logic
if (isCursorSupported) {
  const overlay = document.querySelector(".cursor-overlay");

  const initialX = window.innerWidth / 2;
  const initialY = window.innerHeight * 0.25;

  let mouseX = initialX;
  let mouseY = initialY;
  let currentX = initialX;
  let currentY = initialY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener("mouseleave", () => {
    mouseX = initialX;
    mouseY = initialY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    overlay.style.setProperty("--x", currentX + "px");
    overlay.style.setProperty("--y", currentY + "px");

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animate);
  }

  animate();
}
