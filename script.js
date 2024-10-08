function randomBackground() {
  let randNum1 = Math.floor(Math.random() * 255 + 1);
  let randNum2 = Math.floor(Math.random() * 255 + 1);
  let randNum3 = Math.floor(Math.random() * 255 + 1);

  let rgbString = `rgb(${randNum1}, ${randNum2}, ${randNum3})`;

  document.getElementById("html").style.background = rgbString;
}

randomBackground();
