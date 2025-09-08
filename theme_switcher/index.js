const selectElement = document.querySelector(".theme");

selectElement.addEventListener("change", (evt) => {
  klikk(evt.target.value);
  console.log("event", evt);
});

function klikk(col) {
  console.log("CLICK", col);
  document.querySelector("body").dataset.filter = col;
}
