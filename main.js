'use strict';

const input = document.getElementById('input');
const output = document.querySelector('.output');

function debounce(f, delay) {
  let timer = setTimeout(() => console.log('waiting for input'), delay);

  return function(event) {
    clearTimeout(timer);
    timer = setTimeout(() => f.call(this, event), delay);
  }
}

function onChange(event) {
  output.innerHTML = event.target.value;
  console.log(this.value); // uncomment if you implemented debounce with correct this
}

let wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);
