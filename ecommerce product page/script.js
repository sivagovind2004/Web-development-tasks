function addToCart() {
    cartCount += quantity;

    document.getElementById("cart-count").innerText = cartCount;

    document.getElementById("message").innerText =
        "✓ Product added to cart successfully!";
}

function addProductToCart() {

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

}