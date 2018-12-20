import getProduct from "./getProduct";

export default (color, productId) => {
    let products = new Set(JSON.parse(localStorage.getItem('baseProducts')));
    let product = getProduct(Array.from(products), productId);
    product.baseColor = color;
    let productsArray = Array.from(products).sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id);
    });
    localStorage.setItem('baseProducts', JSON.stringify(productsArray));

    var event = new CustomEvent("storageBaseProducts");
    window.dispatchEvent(event);
}