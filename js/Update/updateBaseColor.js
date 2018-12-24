import getProduct from "../Getters/getProduct";
import sortProduct from "../Utils/sortProduct";
import getProductLS from "../Getters/getProductLS";
import setProductLS from "../Setters/setProductLS";
import dispatchEvent from "../Utils/dispatchEvent";

export default (color, productId) => {
    let products = getProductLS('baseProducts');
    let product = getProduct(Array.from(products), productId);

    product.baseColor = color;

    setProductLS('baseProducts', sortProduct(products));
    dispatchEvent('storageBaseProducts', null);
}