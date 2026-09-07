import "./style.css";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "skyblue";
ctx.fillRect(50, 100, 100, 100);

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`Clicked at: (${x}, ${y})`);
});
