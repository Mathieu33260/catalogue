import getProduct from './getProduct.js';

export default product => {
    let products = new Set();
    var event = new CustomEvent("storage");
    if (localStorage.getItem('products')) {
        if (JSON.parse(localStorage.getItem('products')).some(p => (p.id === product.id))) {
            products = new Set(JSON.parse(localStorage.getItem('products')));
            product = getProduct(Array.from(products), product.id);
            products.delete(product);

            localStorage.setItem('products', JSON.stringify(Array.from(products)));

            window.dispatchEvent(event);
        }
    }
}