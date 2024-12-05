const searchInput = document.getElementById("search-input");
const productItem = document.querySelectorAll(".product-item");
const searchPrice = document.getElementById("search-price").children[1];
const buttuns = document.querySelectorAll(".filter");
const changeClass = (filterButtuns) => {
	buttuns.forEach((buttun) => {
		if (buttun.dataset.filter === filterButtuns) {
			buttun.classList.add("selected");
		} else {
			buttun.classList.remove("selected");
		}
	});
};
const showSearchHandler = (event) => {
	const searchItem = event.target.value.toLowerCase().trim();
	productItem.forEach((product) => {
		const productName = product.children[1].innerText.toLowerCase();
		if (productName.includes(searchItem)) {
			product.style.display = "block";
		} else {
			product.style.display = "none";
		}
	});
};
const buttunHandler = (event) => {
	const filterButtuns = event.target.dataset.filter;
	changeClass(filterButtuns);
	productItem.forEach((product) => {
		const productCategory = product.dataset.category;
		if (filterButtuns === "all") {
			product.style.display = "block";
		} else {
			filterButtuns === productCategory
				? (product.style.display = "block")
				: (product.style.display = "none");
		}
	});
};
const showPriceHandler = (event) => {
	const searchPrices = +event.target.parentElement.children[0].value;
	productItem.forEach((product) => {
		const productPrice = product.children[2].innerText.trim();
		const productPriceValue = +productPrice.split(" ")[1];
		if (!searchPrices) {
			product.style.display = "block";
		} else {
			if (searchPrices === productPriceValue) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		}
	});
};

buttuns.forEach((buttun) => {
	buttun.addEventListener("click", buttunHandler);
});
searchInput.addEventListener("keyup", showSearchHandler);
searchPrice.addEventListener("click", showPriceHandler);
