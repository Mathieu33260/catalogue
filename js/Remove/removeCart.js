import getProduct from '../Getters/getProduct.js';
import getProductLS from "../Getters/getProductLS";
import setProductLS from "../Setters/setProductLS";
import sortProduct from "../Utils/sortProduct";
import dispatchEvent from "../Utils/dispatchEvent";
import isInsideLS from "../Getters/isInsideLS";

export default product => {
    let products = new Set();

    if (localStorage.getItem('products')) {
        if (isInsideLS('products', product)) {
            products = getProductLS('products');
            product = getProduct(Array.from(products), product.id);
            products.delete(product);

            setProductLS('products', sortProduct(products));

            dispatchEvent('storage', null);
        }
    }
}