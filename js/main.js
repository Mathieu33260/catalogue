
import jsonGet from './jsonGet.js';
import renderAllProducts from "./renderAllProducts";
import renderPanier from './renderPanier.js';

document.addEventListener('DOMContentLoaded', function (e) {

    //let url = 'http://5be3fd5b95e4340013f88e47.mockapi.io/product';
    let url = 'data/products.json';

    window.addEventListener('storage', function(e) {
        renderPanier();
    });

    Promise.all([url].map(jsonGet)).then((result) => {
        let products = result[0];
        renderAllProducts(products);
        renderPanier();
    });

}, { once: true });