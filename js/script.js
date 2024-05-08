document.querySelectorAll(".sidebar ul li").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector(".sidebar ul li.active").classList.remove("active");
    this.classList.add("active");
  });
});

document.querySelector(".open-btn").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("active");
});


