
import jsonGet from './Utils/jsonGet.js';
import renderAllProducts from "./Render/Product/renderAllProducts";
import renderCart from './Render/Cart/renderCart.js';
import sortProduct from "./Utils/sortProduct";
import getProductLS from "./Getters/getProductLS";
import setProductLS from "./Setters/setProductLS";

document.addEventListener('DOMContentLoaded', function (e) {

    let url = 'data/products.json';

    window.addEventListener('storage', function(e) {
        renderCart();
        if (e.detail) {
            let collapse = e.detail.collapse;
            let list = e.detail.list;
            $('#' + collapse).collapse('show');
            $('#' + list).tab('show');
        }
    });

    window.addEventListener('storageBaseProducts', function(e) {
        let products = getProductLS('baseProducts');
        renderAllProducts(products);
    });

    if (localStorage.getItem('baseProducts')) {
        let products = getProductLS('baseProducts');

        renderAllProducts(sortProduct(products));
        renderCart();
    } else {
        Promise.all([url].map(jsonGet)).then((result) => {
            let products = result[0];

            setProductLS('baseProducts', sortProduct(products));

            renderAllProducts(products);
            renderCart();
        });
    }

}, { once: true });