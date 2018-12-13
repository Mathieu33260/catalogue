import addPanier from './addPanier.js';
import removePanier from './removePanier.js';

export default (qte, color, product) => {
    product.quantite += qte;
    product.color = color;
    removePanier(product);
    if (product.quantite != 0) {
        let products = new Set(JSON.parse(localStorage.getItem('products')));
        products.add(product);
        let productsArray = Array.from(products).sort(function (a, b) {
            return parseInt(a.id) - parseInt(b.id);
        });
        localStorage.setItem('products', JSON.stringify(productsArray));
    }
    var event = new CustomEvent("storage");
    window.dispatchEvent(event);
}