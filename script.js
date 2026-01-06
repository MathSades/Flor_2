const canvas = document.getElementById("pollen");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const pollen = Array.from({length:80}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2+0.5,
  s: Math.random()*0.4+0.2,
  o: Math.random()*Math.PI*2
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pollen.forEach(p=>{
    p.y -= p.s;
    p.x += Math.sin(Date.now()*0.001+p.o)*0.4;
    if(p.y<0)p.y=canvas.height;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,220,150,.7)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
