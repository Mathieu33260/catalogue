import getItem from "./getItem.js";
import getProduct from "./getProduct";
import sortProduct from "./sortProduct";
import getProductLS from "./getProductLS";
import setProductLS from "./setProductLS";
import dispatchEvent from "./dispatchEvent";

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