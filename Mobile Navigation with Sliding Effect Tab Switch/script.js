const nav = document.querySelector(".nav");
const items = document.querySelectorAll(".nav .list .item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const currentActiveElement = document.querySelector(
      ".nav .list .item.active"
    );
    if (currentActiveElement) currentActiveElement.classList.remove("active");
    item.classList.add("active");
    nav.style.setProperty("--position-x-active", item.offsetLeft + "px");
  });
});

const activeTab = document.querySelector(".nav .list .item.active");
if (activeTab) {
  nav.style.setProperty("--position-x-active", activeTab.offsetLeft + "px");
}
