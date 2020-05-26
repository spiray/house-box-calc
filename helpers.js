import { boxes, input, progress, rows } from './globals.js';

const tab = document.getElementById('table-cont');
const grid = document.getElementsByTagName('td');

/**
 * @description Creates HTML Table and appends it to the table container
 * @return {void}
 */
function genTable() {
  const table = document.createElement('table');
  const row = `<tr>${'<td></td>'.repeat(40)}</tr>`.repeat(25);

  table.insertAdjacentHTML('beforeend', row);
  tab.appendChild(table);
}

/**
 * @description Sets the background color of all td elements to white.
 * @return {void}
 */
function clearGrid() {
  for (const gr of grid) gr.style.backgroundColor = '#FFF';
}

/**
 * @description Calculates the number fo cells to color in, clears the grid and colors in the cells.
 * @return {void}
 */
function handler() {
  const { floor, trunc, round } = Math;
  const total = Number(input.value);
  const percentNum = round((total / 100000) * 100);

  rows.textContent = trunc(total / 4000);
  boxes.textContent = floor(40 * ((total / 4000) % 1));
  progress.textContent = `${percentNum}%`;
  progress.style.width = `${percentNum}%`;
  clearGrid();
  for (
    let i = 0;
    i < trunc(total / 4000) * 40 + floor(40 * ((total / 4000) % 1));
    ++i
  )
    grid[i].style.backgroundColor = '#298496';
}
export { genTable, clearGrid, handler };
