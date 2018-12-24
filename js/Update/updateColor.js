import getItem from "../Getters/getItem.js";
import getProduct from "../Getters/getProduct";
import sortProduct from "../Utils/sortProduct";
import getProductLS from "../Getters/getProductLS";
import setProductLS from "../Setters/setProductLS";
import dispatchEvent from "../Utils/dispatchEvent";

export default (color, itemId, product) => {
    let products = getProductLS('products');
    product = getProduct(Array.from(products), product.id);
    let it = getItem(product.items, itemId);
    it.color = color;

    setProductLS('products', sortProduct(products));

    let toOpen = {
        collapse: 'collapse' + product.id,
        list: 'list-' + it.id + '-list'
    };

    dispatchEvent('storage', toOpen);
}