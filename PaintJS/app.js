const canvas = document.getElementById("jsCanvas"); // canvas
const ctx = canvas.getContext("2d"); // context

ctx.strokeStyle = "#2c2c2c"; // 선 color
ctx.lineWidth = 2.5; // 선 두께

canvas.width = 700;
canvas.height = 700;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) { 
    ctx.beginPath(); // 경로 생성
    ctx.moveTo(x, y); // 좌표를 x, y 위치로 이동 (선의 시작)
  }else {
    ctx.lineTo(x, y); // 좌표를 x, y 위치로 이동 (선의 끝)
    ctx.stroke(); // 선 출력
  }
}


if(canvas){
  canvas.addEventListener("mousemove", onMouseMove); // 컨버스 위에서 커서가 움직일 때
  canvas.addEventListener("mousedown", startPainting); // 컨버스를 클릭하고 있을 때
  canvas.addEventListener("mouseup", stopPainting); // 켠벼스에서 마우스 버튼을 떼었을 때
  canvas.addEventListener("mouseleave", stopPainting); // 커서가 컨버스를 벗어났을 때
}