
import jsonGet from './jsonGet.js';
import renderAllProducts from "./renderAllProducts";
import renderPanier from './renderPanier.js';
import sortProduct from "./sortProduct";
import getProductLS from "./getProductLS";
import setProductLS from "./setProductLS";

document.addEventListener('DOMContentLoaded', function (e) {

    //let url = 'http://5be3fd5b95e4340013f88e47.mockapi.io/product';
    let url = 'data/products.json';

    window.addEventListener('storage', function(e) {
        renderPanier();
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
        renderPanier();
    } else {
        Promise.all([url].map(jsonGet)).then((result) => {
            let products = result[0];

            setProductLS('baseProducts', sortProduct(products));

            renderAllProducts(products);
            renderPanier();
        });
    }

}, { once: true });