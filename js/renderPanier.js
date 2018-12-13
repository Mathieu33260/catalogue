import updateProduct from './updateProduct.js';
import updateQte from "./updateQte";

export default () => {
    $('#panierContent').empty();
    if (localStorage.getItem('products')) {
        let products = new Set(JSON.parse(localStorage.getItem('products')));
        let accordion = document.createElement('div');
        accordion.classList.add('accordion');
        accordion.id = 'accordion';
        $('#panierContent').append(accordion);
        let index = 1;
        products.forEach(function (product) {

            let itemContent = '';
            let itemTab = '';

            let index2 = 1;
            product.items.forEach(function (i) {
                itemContent += '<div class="tab-pane fade row" id="pills-'+ index2 +'" role="tabpanel" ' +
                    'aria-labelledby="pills-'+ index2 +'-tab">' +
                    '      <div class="col-4">' +
                    '        <img class="mw-100" src="' + product.image + '" alt="' + product.name + '">' +
                    '      </div>' +
                    '      <div class="d-flex flex-column col-6">' +
                    '        <p>' + product.description + '</p>' +
                    '        <p>' + product.category + '</p>' +
                    '        <p>' + product.price + '€</p>' +
                    '      </div>' +
                    '</div>\n';
                itemTab += '<li class="nav-item">\n' +
                    '    <a class="nav-link" id="pills-'+ index2 +'-tab" data-toggle="pill" href="#pills-'+ index2 +'" ' +
                    'role="tab" aria-controls="pills-'+ index2 +'">'+ index2 +'</a>\n' +
                    '  </li>\n';
                index2 ++;
            });

            $('#accordion').append("<div class='card'>" +
                "  <div class='card-header' id='heading" + index + "'>" +
                '    <h5 class="mb-0">' +
                '      <div class="d-flex justify-content-between row">' +
                '        <div class="form-inline d-flex justify-content-between col-5" data-toggle="collapse" data-target="#collapse' + index + '" aria-controls="collapse' + index + '">' +
                '          <button class="btn bg-transparent border" type="button">' +
                '            <i class="fas fa-angle-down fa-3x" style="color: #4e555b;"></i> ' +
                '          </button>        ' +
                '          <button class="btn bg-transparent" type="button">' + product.name + '</button>' +
                '        </div>' +
                '        <div class="form-inline d-flex justify-content-between col-5">' +
                '          <select style="background-color: ' + product.color + '" class="form-control" id="colorSelect' + index + '">\n' +
                '            <option style="background-color: ' + product.color + '" selected></option>\n' +
                '            <option class="bg-danger" value="red"></option>\n' +
                '            <option class="bg-primary" value="blue"></option>\n' +
                '            <option class="bg-success" value="green"></option>\n' +
                '            <option class="bg-warning" value="yellow"></option>\n' +
                '          </select>\n' +
                '          <button type="button" class="btn btn-danger btn-sm" id="suppQte' + index +  '">-</button>\n' +
                '          <span id="qte' + index +  '">' + product.quantite + '</span>\n' +
                '          <button type="button" class="btn btn-success btn-sm" id="addQte' + index +  '">+</button>' +
                '        </div>' +
                '      </div>' +
                '    </h5>' +
                '  </div>' +
                '  <div class="collapse" id="collapse' + index + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                '    <div class="card-body d-flex row">' +
                '       <div class="tab-content" id="pills-tabContent">\n' +
                itemContent +
                '</div>\n' +
                '<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">\n' +
                itemTab +
                '</ul>' +

                '    </div>' +
                "  </div>" +
                "</div>");

            $('#addQte' + index).click(function () {
                updateQte(1, product);
            });

            $('#suppQte' + index).click(function () {
                updateQte(-1, product);
            });

            index++;
        });
    } else {
        $('#panierContent').append("<p>Pas d'articles dans le panier</p>");
    }
}