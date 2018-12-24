import addCart from '../Add/addCart.js';
import removeCart from '../Remove/removeCart.js';
import removeItem from '../Remove/removeItem.js';

export default (qte, product) => {
    product.quantite += qte;
    if (product.quantite === 0) {
        removeCart(product);
    } else {
        qte > 0 ? addCart(product) : removeItem(product);
    }
}