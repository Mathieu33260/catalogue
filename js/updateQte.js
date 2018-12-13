import addPanier from './addPanier.js';
import removePanier from './removePanier.js';
import removeItem from './removeItem.js';

export default (qte, product) => {
    product.quantite += qte;
    if (product.quantite === 0) {
        removePanier(product);
    } else {
        qte > 0 ? addPanier(product) : removeItem(product);
    }
}