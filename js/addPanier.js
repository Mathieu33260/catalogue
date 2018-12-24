import getProduct from './getProduct.js';
import sortProduct from "./sortProduct";
import getProductLS from "./getProductLS";
import setProductLS from "./setProductLS";
import dispatchEvent from "./dispatchEvent";
import isInsideLS from "./isInsideLS";
import createItem from "./createItem";

export default product => {
    let products = new Set();

    if (localStorage.getItem('products')) {
        if (!isInsideLS('products', product)) {
            products = getProductLS('products');
            createItem(product);
            products.add(product);

            setProductLS('products', sortProduct(products));
            dispatchEvent('storage', null);
        } else {
            products = getProductLS('products');
            product = getProduct(Array.from(products), product.id);
            product.quantite ++;
            createItem(product);

            setProductLS('products', sortProduct(products));
            dispatchEvent('storage', null);
        }
    } else {
        createItem(product);
        products.add(product);

        setProductLS('products', sortProduct(products));
        dispatchEvent('storage', null);
    }
}