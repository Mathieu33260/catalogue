import getProduct from "./getProduct";
import getProductLS from "./getProductLS";
import setProductLS from "./setProductLS";
import sortProduct from "./sortProduct";
import dispatchEvent from "./dispatchEvent";
import isInsideLS from "./isInsideLS";

export default product => {
    let products = new Set();

    if (localStorage.getItem('products')) {
        if (isInsideLS('products', product)) {
            products = getProductLS('products');
            product = getProduct(Array.from(products), product.id);
            product.quantite --;
            product.items.pop();

            setProductLS('products', sortProduct(products));

            dispatchEvent('storage', null);
        }
    }
}