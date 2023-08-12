const checkbox = document.getElementById("checkbox");
const nav = document.querySelector("nav");
const slideshowContainer = document.querySelector(".slideshow-container");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    // 햄버거 메뉴가 열렸을 때
    nav.classList.add("menu-open");
    slideshowContainer.style.transform = "translateX(-70%)"; // 슬라이더를 왼쪽으로 밀어냄
  } else {
    // 햄버거 메뉴가 닫혔을 때
    nav.classList.remove("menu-open");
    slideshowContainer.style.transform = "translateX(0)"; // 슬라이더를 원래 위치로 복원
  }
});
