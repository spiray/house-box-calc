import { boxes, input, progress, rows } from "./globals.js";
import { clearGrid, genTable, handler } from "./helpers.js";

(() => {
  const submit = document.getElementById("submit");
  const clear = document.getElementById("clear");
  const percent = document.getElementById("percent");

  genTable();

  submit.addEventListener("click", handler);
  input.addEventListener("change", handler);
  clear.addEventListener("click", () => {
    input.value = "";
    rows.textContent = "";
    boxes.textContent = "";
    percent.textContent = "";
    clearGrid();
    progress.textContent = "";
    progress.style.width = `${0}%`;
  });

})();
