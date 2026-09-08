import "./style.css";

const canvas = document.getElementById("myCanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("Canvas element not found");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
  throw new Error("2D canvas context not available");
}

ctx.fillStyle = "skyblue";
ctx.fillRect(50, 100, 100, 100);

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`Clicked at: (${x}, ${y})`);
});

const circle = new Path2D();
circle.arc(100, 300, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill(circle);

canvas.addEventListener("mousemove", (event) => {
  const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  ctx.fillStyle = isPointInPath ? "green" : "red";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fill(circle);
});
