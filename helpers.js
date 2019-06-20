import { boxes, input, progress, rows } from "./globals.js";

const tab = document.getElementById("table-cont");
const grid = document.getElementsByTagName("td");

function genTable () {
  const table = document.createElement("table");
  const row = `<tr>${"<td></td>".repeat(40)}</tr>`.repeat(25);

  table.insertAdjacentHTML("beforeend", row);
  tab.appendChild(table);
}

function clearGrid () {
  for (const gr of grid)
    gr.style.backgroundColor = "#FFF";
}

function handler () {
  const {
    floor,
    trunc,
    round,
  } = Math;
  const total = Number(input.value);
  const percentNum = round(total / 100000 * 100);

  rows.textContent = trunc(total / 4000);
  boxes.textContent = floor(40 * (total / 4000 % 1));
  progress.textContent = `${percentNum}%`;
  progress.style.width = `${percentNum}%`;
  clearGrid();
  for (let i = 0; i < trunc(total / 4000) * 40 + floor(40 * (total / 4000 % 1)); ++i)
    grid[i].style.backgroundColor = "#298496";

}
export {
  genTable,
  clearGrid,
  handler,
};
