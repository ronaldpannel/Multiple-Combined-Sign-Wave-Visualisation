/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let waves = [];

class Wave {
  constructor(amp, period, phase) {
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }
  evaluate(x) {
    return (
      Math.sin(this.phase + (Math.PI * 2 * x) / this.period) * this.amplitude
    );
  }
  update(){
    this.phase += 0.1
  }
}
for (let i = 0; i < 5; i++) {
  let amp = Math.random() * (80 - 20) + 20;
  let period = Math.random() * (600 - 100) + 100;
  let phase = Math.random() * (Math.PI * 2);
  waves[i] = new Wave(amp, period, phase);
}

function drawWave() {
  for (let x = 0; x < canvas.width; x += 10) {
    let y = 0;
    for (let wave of waves) {
      y += wave.evaluate(x);
    }
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y + canvas.height / 2, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  for(let wave of waves){
    wave.update()
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = 'rgba(0, 0, 0,0.01)'
  // ctx.fillRect(0,0, canvas.width, canvas.height);
  drawWave();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
