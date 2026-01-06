const petalsGroup = document.querySelector(".petals-group");
let angle = 0;

function animate() {
  angle += 0.05;
  petalsGroup.setAttribute(
    "transform",
    `translate(340 100) rotate(${angle} 60 400)`
  );
  requestAnimationFrame(animate);
}

animate();
