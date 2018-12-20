
import jsonGet from './jsonGet.js';
import renderAllProducts from "./renderAllProducts";
import renderPanier from './renderPanier.js';

document.addEventListener('DOMContentLoaded', function (e) {

    //let url = 'http://5be3fd5b95e4340013f88e47.mockapi.io/product';
    let url = 'data/products.json';

    window.addEventListener('storage', function(e) {
        renderPanier();
    });

    window.addEventListener('storageBaseProducts', function(e) {
        let products = new Set(JSON.parse(localStorage.getItem('baseProducts')));
        renderAllProducts(products);
    });

    if (localStorage.getItem('baseProducts')) {
        let products = new Set(JSON.parse(localStorage.getItem('baseProducts')));

        let productsArray = Array.from(products).sort(function (a, b) {
            return parseInt(a.id) - parseInt(b.id);
        });

        renderAllProducts(productsArray);
        renderPanier();
    } else {
        Promise.all([url].map(jsonGet)).then((result) => {
            let products = result[0];

            let productsArray = products.sort(function (a, b) {
                return parseInt(a.id) - parseInt(b.id);
            });
            localStorage.setItem('baseProducts', JSON.stringify(productsArray));

            renderAllProducts(products);
            renderPanier();
        });
    }

}, { once: true });