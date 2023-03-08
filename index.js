var button = document.querySelector(".btn");

button.addEventListener("click", function () {
  document.querySelector(".trailer-container").classList.remove("active");
});

document.querySelector(".close-icon").addEventListener("click", () => {
  document.querySelector(".trailer-container").classList.add("active");
  document.querySelector("video").pause();
  document.querySelector("video").currentTime = 0;
});
