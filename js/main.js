
import jsonGet from './jsonGet.js';
import renderAllProducts from "./renderAllProducts";
import dataBinding from './dataBinding.js';

document.addEventListener('DOMContentLoaded', function (e) {

    let url = 'http://5be3fd5b95e4340013f88e47.mockapi.io/product';

    Promise.all([url].map(jsonGet)).then((result) => {
        let products = result[0];
        renderAllProducts(products);
        dataBinding('#panierContent', '#templatePanier', JSON.parse(localStorage.getItem('products')));
    });

}, { once: true })