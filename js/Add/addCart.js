import getProduct from '../Getters/getProduct.js';
import sortProduct from "../Utils/sortProduct";
import getProductLS from "../Getters/getProductLS";
import setProductLS from "../Setters/setProductLS";
import dispatchEvent from "../Utils/dispatchEvent";
import isInsideLS from "../Getters/isInsideLS";
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