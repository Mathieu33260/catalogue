
import renderProduct from './renderProduct';
import updateBaseColor from "./updateBaseColor";
import addPanier from "./addPanier";
import getProduct from "./getProduct";
import getProductLS from "./getProductLS";

export default products => {
    $('#products').empty();
    products.forEach(function (product) {
        $('#products').append(renderProduct(product));
    });

    $('.btnAddPanier').on('click', function() {
        let products = getProductLS('baseProducts');
        let product = getProduct(Array.from(products), $(this).attr('itemid'));
        addPanier(product);
    });

    $('.selectProduct').on('change', function() {
        updateBaseColor($(this).val(), $(this).attr('itemid'));
    });
}