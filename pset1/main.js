const boxes = document.querySelectorAll('.box');
console.dir(boxes);
let i = 0;

setInterval(function(){
  boxes[i].classList.toggle('red');
  console.log(i);
  i++;
  if (i > 8) {
    i = 0;
  }
}, 1000);