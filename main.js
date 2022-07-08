const input = document.querySelector("#input");
const ul = document.querySelector("ul");

input.addEventListener("change", (e) => {
  let value = e.currentTarget.value.trim();
  let li = document.createElement("li");
  ul.append(li);
  li.innerHTML = `${value} <img src="./bin.png"/>`;
  input.value = "";
});

$("ul").on("click", "img", function () {
  $(this).parent("li").fadeOut(200);
});

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});
