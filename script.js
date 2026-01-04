const drag = document.getElementById('drag');
const drop = document.getElementById('drop');

drag.addEventListener('dragstart', e=>{
  e.dataTransfer.setData('text', 'drag');
});

drop.addEventListener('dragover', e=>{
  e.preventDefault();
});

drop.addEventListener('drop', e=>{
  e.preventDefault();
  drop.innerText = 'Dropped ✔';
  drop.style.borderColor = '#22c55e';
});
