import getProduct from "./getProduct";
import sortProduct from "./sortProduct";
import getProductLS from "./getProductLS";
import setProductLS from "./setProductLS";
import dispatchEvent from "./dispatchEvent";

export default (color, productId) => {
    let products = getProductLS('baseProducts');
    let product = getProduct(Array.from(products), productId);

    product.baseColor = color;

    setProductLS('baseProducts', sortProduct(products));
    dispatchEvent('storageBaseProducts', null);
}