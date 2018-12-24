import getProduct from "../Getters/getProduct";
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
            product.quantite --;
            product.items.pop();

            setProductLS('products', sortProduct(products));

            dispatchEvent('storage', null);
        }
    }
}