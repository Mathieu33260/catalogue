import updateQte from "./updateQte";
import updateColor from "./updateColor";
import getProductLS from "./getProductLS";
import renderItemContent from "./renderItemContent";
import renderItemTab from "./renderItemTab";
import renderAccordion from "./renderAccordion";

export default () => {
    $('#panierContent').empty();
    if (localStorage.getItem('products')) {

        let products = getProductLS('products');

        if (products.size > 0) {
            let accordion = document.createElement('div');
            accordion.classList.add('accordion');
            accordion.id = 'accordion';

            $('#panierContent').append(accordion);

            products.forEach(function (product) {

                let itemContent = '';
                let itemTab = '';
                let index = 1;

                product.items.forEach(function (i) {
                    itemContent += renderItemContent(product, i);
                    itemTab += renderItemTab(i, index);
                    index ++;
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
        } else {
            $('#panierContent').append("<p>Pas d'articles dans le panier</p>");
        }
    } else {
        $('#panierContent').append("<p>Pas d'articles dans le panier</p>");
    }
}