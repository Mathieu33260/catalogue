
import renderProduct from './renderProduct';
import updateBaseColor from "../../Update/updateBaseColor";
import addCart from "../../Add/addCart";
import getProduct from "../../Getters/getProduct";
import getProductLS from "../../Getters/getProductLS";

export default products => {
    $('#products').empty();
    products.forEach(function (product) {
        $('#products').append(renderProduct(product));
    });

    $('.btnAddCart').on('click', function() {
        let products = getProductLS('baseProducts');
        let product = getProduct(Array.from(products), $(this).attr('itemid'));
        addCart(product);
    });

    $('.selectProduct').on('change', function() {
        updateBaseColor($(this).val(), $(this).attr('itemid'));
    });
}