const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.id = "lampCanvas";
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "0";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#ff4d6d", "#ffcc00", "#00ffcc", "#00ccff", "#ff00ff", "#00ff00"];
const lamps = [];

class Lamp {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 4 + 3;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.alpha = Math.random();
    this.fade = Math.random() * 0.02 + 0.01;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${this.alpha})`;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.alpha += this.fade;
    if (this.alpha >= 1 || this.alpha <= 0) {
