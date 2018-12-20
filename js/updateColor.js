import getItem from "./getItem.js";
import getProduct from "./getProduct";

export default (color, itemId, product) => {
    let products = new Set(JSON.parse(localStorage.getItem('products')));
    product = getProduct(Array.from(products), product.id);
    let it = getItem(product.items, itemId);
    it.color = color;
    let productsArray = Array.from(products).sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id);
    });
    localStorage.setItem('products', JSON.stringify(productsArray));

    let toOpen = {
        collapse: 'collapse' + product.id,
        list: 'list-' + it.id + '-list'
    };

    var event = new CustomEvent("storage", {detail: toOpen});
    window.dispatchEvent(event);
}