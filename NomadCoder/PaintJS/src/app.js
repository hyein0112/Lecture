const canvas = document.getElementById("jsCanvas"); // canvas
const ctx = canvas.getContext("2d"); // context
const colors = document.getElementsByClassName("jsColor");  // colors
const range = document.getElementById("jsRange"); // brush range
const canvasRange = document.getElementById("canvasRange"); // canvas range
const mode = document.getElementById("jsMode"); // mode

const INITIAL_COLOR = "#2c2c2c"; // 디폴트 color
const CANVAS_SIZE = 700; // 디폴트 size

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR; // 선 color
ctx.fillStyle = INITIAL_COLOR; // 사각형 color
ctx.lineWidth = 2.5; // 선 두께

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  if(!painting) { 
    ctx.beginPath(); // 경로 생성
    ctx.moveTo(x, y); // 좌표를 x, y 위치로 이동 (선의 시작)
  }else {
    ctx.lineTo(x, y); // 좌표를 x, y 위치로 이동 (선의 끝)
    ctx.stroke(); // 선 출력
  }

  if(filling){
    painting = false;
  }
}

function handleColorClick(e) {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(e) {
  const size = e.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(e) {
  if(filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint"
  }
}

function handleCanvasClick() {
  if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove); // 컨버스 위에서 커서가 움직일 때
  canvas.addEventListener("mousedown", startPainting); // 컨버스를 클릭하고 있을 때
  canvas.addEventListener("mouseup", stopPainting); // 켠벼스에서 마우스 버튼을 떼었을 때
  canvas.addEventListener("mouseleave", stopPainting); // 커서가 컨버스를 벗어났을 때
  canvas.addEventListener("click", handleCanvasClick); // 컨버스를 클릭했을 때
}

Array.from(colors).forEach(color => 
  color.addEventListener("click", handleColorClick) // 각 color를 선택했을 때
); 

if(range) {
  range.addEventListener("input", handleRangeChange); // range의 값을 변경했을 때
}

if(mode) {
  mode.addEventListener("click", handleModeClick); // mode 버튼을 클릭했을 때
}