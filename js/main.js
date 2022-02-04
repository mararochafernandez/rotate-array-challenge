'use strict';

const arrayBefore = [
  ['11', '12', '13', '14'],
  ['21', '22', '23', '24'],
  ['31', '32', '33', '34'],
  ['41', '42', '43', '44'],
];

const rorateArray = (array) => {
  let newRow = [];
  const newArray = [];

  array.reverse();

  for (let row = 0; row < array.length; row++) {
    newRow = [];
    for (let col = 0; col < array[row].length; col++) {
      newRow.push(array[col][row]);
    }
    newArray.push(newRow);
  }

  return newArray;
};

const renderArray = (array) => {
  let html = '';

  for (let row = 0; row < array.length; row++) {
    html += '<ul class="list">';
    for (let col = 0; col < array[row].length; col++) {
      html += `<li class="list__item list__item--${array[row][col]}"></li>`;
    }
    html += '</ul>';
  }

  return html;
};

// rotate 90 degrees
const arrayAfter = rorateArray([...arrayBefore]);

console.log('before', arrayBefore);
console.log('after', arrayAfter);

// render original array
document.querySelector('.js-before').innerHTML = renderArray(arrayBefore);

// render rotated array
document.querySelector('.js-after').innerHTML = renderArray(arrayAfter);
