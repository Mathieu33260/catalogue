import updateQte from "../../Update/updateQte";
import updateColor from "../../Update/updateColor";
import getProductLS from "../../Getters/getProductLS";
import renderItemContent from "../Item/renderItemContent";
import renderItemTab from "../Item/renderItemTab";
import renderAccordion from "./renderAccordion";

export default () => {
    $('#CartContent').empty();
    if (localStorage.getItem('products')) {

        let products = getProductLS('products');

        if (products.size > 0) {
            let accordion = document.createElement('div');
            accordion.classList.add('accordion');
            accordion.id = 'accordion';

            $('#CartContent').append(accordion);
            let totalPrice = 0;
            let totalProduct = 0;

            products.forEach(function (product) {

                let itemContent = '';
                let itemTab = '';
                totalPrice += product.price * product.quantite;
                totalProduct += product.quantite;

                product.items.forEach(function (i) {
                    itemContent += renderItemContent(product, i);
                    itemTab += renderItemTab(i);
                });

                $('#accordion').append(renderAccordion(itemTab, itemContent, product));

                $('#addQte' + product.id).click(function () {
                    updateQte(1, product);
                });

                $('#suppQte' + product.id).click(function () {
                    updateQte(-1, product);
                });

                product.items.forEach(function (i) {
                    $('#colorSelect' + i.id).on('change', function() {
                        updateColor($(this).val(), i.id, product);
                    });
                });

            });

            $('#totalPrice').text(totalPrice);
        } else {
            $('#CartContent').append("<p>Pas d'articles dans le panier</p>");
        }
    } else {
        $('#CartContent').append("<p>Pas d'articles dans le panier</p>");
    }
}