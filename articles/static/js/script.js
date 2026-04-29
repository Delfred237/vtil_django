document.querySelector("#clickButton").addEventListener("click", function () {
  alert("Welcome to this django project!");
});

document.querySelector("#shopping-bag").addEventListener("click", function () {
  console.log("Test");

  document.querySelector("#modal").classList.remove("hidden");
});

document.querySelector("#modal-button").addEventListener("click", function () {
  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector("#modal").classList.add("flex");
});
