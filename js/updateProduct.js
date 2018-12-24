import sortProduct from './sortProduct.js';
import removePanier from './removePanier.js';
import getProductLS from "./getProductLS";
import setProductLS from "./setProductLS";
import dispatchEvent from "./dispatchEvent";

export default (qte, color, product) => {
    product.quantite += qte;
    product.color = color;
    removePanier(product);
    if (product.quantite != 0) {
        let products = getProductLS('products');
        products.add(product);

        setProductLS('products', sortProduct(products));
    }
    dispatchEvent('storage', null);
}