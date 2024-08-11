const task = document.getElementById('task');
const add = document.getElementById('add');
const list = document.getElementById('list');
let counter = 0;

add.addEventListener('click', () => {
  const li = document.createElement('li');
  li.id = `task${counter}`;
  li.innerHTML = `<input type="checkbox" id="task${counter}Checkbox"> `+task.value;
  list.appendChild(li);
  counter++;    
  task.value = '';
});
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const li = event.target.parentElement;
    if (event.target.checked) {
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = 'none';
    }
  });
});