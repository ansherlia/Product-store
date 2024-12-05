const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttuns = document.querySelectorAll(".filter");
const searchPrice = document.getElementById("search-price");
// console.log(searchPrice);
const changeClass = (clicked) => {
  buttuns.forEach((buttun) => {
    if (buttun.dataset.filter === clicked) {
      buttun.classList.add("selected");
    } else {
      buttun.classList.remove("selected");
    }
  });
};
function showHandler(event) {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    productName.includes(searchValue)
      ? (product.style.display = "block")
      : (product.style.display = "none");
  });
}
searchInput.addEventListener("keyup", showHandler);
const buttunHandler = (dataButtun) => {
  const clicked = dataButtun.target.dataset.filter;
  changeClass(clicked);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (clicked === "all") {
      product.style.display = "block";
    } else {
      clicked === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};
buttuns.forEach((buttun) => {
  buttun.addEventListener("click", buttunHandler);
});
const showPriceHandler = (event) => {
  const findPrice = +event.target.parentElement.children[0].value;
  // console.log(findPrice);
  products.forEach((product) => {
    const productPrice = product.children[2].innerText.trim();
    const price = +productPrice.split(" ")[1];
    if (!findPrice) {
      product.style.display = "block";
    } else {
      findPrice === price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};
searchPrice.addEventListener("click", showPriceHandler);
