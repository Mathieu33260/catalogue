import removePanier from './removePanier.js';
import getProduct from './getProduct.js';

export default product => {
    let products = new Set();
    var event = new CustomEvent("storage");
    if (localStorage.getItem('products')) {
        if (!JSON.parse(localStorage.getItem('products')).some(p => (p.id === product.id))) {
            products = new Set(JSON.parse(localStorage.getItem('products')));
            let item = {
                "id": product.id + "-" + product.quantite,
                "color": product.baseColor
            };
            product.items.push(item);
            products.add(product);
            let productsArray = Array.from(products).sort(function (a, b) {
                return parseInt(a.id) - parseInt(b.id);
            });
            localStorage.setItem('products', JSON.stringify(productsArray));

            window.dispatchEvent(event);
        } else {
            products = new Set(JSON.parse(localStorage.getItem('products')));
            product = getProduct(Array.from(products), product.id);
            product.quantite ++;
            let item = {
                "id": product.id + "-" + product.quantite,
                "color": product.baseColor
            };
            product.items.push(item);
            //products.add(product);
            let productsArray = Array.from(products).sort(function (a, b) {
                return parseInt(a.id) - parseInt(b.id);
            });
            localStorage.setItem('products', JSON.stringify(productsArray));

            window.dispatchEvent(event);
        }
    } else {
        let item = {
            "id": product.id + "-" + product.quantite,
            "color": product.baseColor
        };
        product.items.push(item);
        products.add(product);
        let productsArray = Array.from(products).sort(function (a, b) {
            return parseInt(a.id) - parseInt(b.id);
        });
        localStorage.setItem('products', JSON.stringify(productsArray));

        window.dispatchEvent(event);
    }
}