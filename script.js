const products = document.querySelectorAll(".product");

products.forEach((product, i) => {
    if(i == 0) {
        product.classList.add("rounded-top");
    }
    if(i == products.length - 1) {
        product.classList.add("rounded-bottom");
        product.classList.add("mb-5");
    }
});