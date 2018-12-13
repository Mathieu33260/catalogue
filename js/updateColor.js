import addPanier from './addPanier.js';
import getProduct from "./getProduct";
import removePanier from "./removePanier";

export default (color, product) => {
    product.color = color;

    let products = new Set(JSON.parse(localStorage.getItem('products')));

    //product = getProduct(Array.from(products), product.id);
    product.color = color;

    removePanier(product);

    products.add(product);
    let productsArray = Array.from(products).sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id);
    });
    localStorage.setItem('products', JSON.stringify(productsArray));

    window.dispatchEvent(event);
}