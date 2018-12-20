import updateQte from "./updateQte";
import updateColor from "./updateColor";

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
                itemContent += '<div class="tab-pane fade" id="list-'+ index2 +'" role="tabpanel">' +
                    '      <div class="col-4">' +
                    '        <img class="mw-100" src="' + product.image + '" alt="' + product.name + '">' +
                    '      </div>' +
                    '      <div class="flex-column col-6">' +
                    '        <p>' + product.description + '</p>' +
                    '        <p>' + product.category + '</p>' +
                    '        <p>' + product.price + '€</p>' +
                    '      </div>' +
                    '          <select style="background-color: ' + i.color + '" itemid="' + i.id + '" class="form-control" id="colorSelect' + index2 + '">\n' +
                    '            <option style="background-color: ' + i.color + '" selected></option>\n' +
                    '            <option class="bg-danger" value="red"></option>\n' +
                    '            <option class="bg-primary" value="blue"></option>\n' +
                    '            <option class="bg-success" value="green"></option>\n' +
                    '            <option class="bg-warning" value="yellow"></option>\n' +
                    '          </select>\n' +
                    '</div>\n';
                itemTab += '<a class="list-group-item list-group-item-action" id="list-' + index2 + '-list" ' +
                    'data-toggle="list" href="#list-' + index2 + '" role="tab">' + index2 + '</a>';


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
                '          <button type="button" class="btn btn-danger btn-sm" id="suppQte' + index +  '">-</button>\n' +
                '          <span id="qte' + index +  '">' + product.quantite + '</span>\n' +
                '          <button type="button" class="btn btn-success btn-sm" id="addQte' + index +  '">+</button>' +
                '        </div>' +
                '      </div>' +
                '    </h5>' +
                '  </div>' +
                '  <div class="collapse" id="collapse' + index + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                '    <div class="card-body">' +
                '       <div class="row">\n' +
                '           <div class="col-3">\n' +
                '               <div class="list-group" id="list-tab" role="tablist">\n' +
                itemTab +
                '               </div>\n' +
                '           </div>\n' +
                '           <div class="col-9">\n' +
                '               <div class="tab-content" id="nav-tabContent">\n' +
                itemContent +
                '               </div>\n' +
                '           </div>' +
                '       </div>\n' +
                '    </div>' +
                "  </div>" +
                "</div>");

            $('#addQte' + index).click(function () {
                updateQte(1, product);
            });

            $('#suppQte' + index).click(function () {
                updateQte(-1, product);
            });

            $('select').on('change', function() {
                updateColor($(this).val(), $(this).attr('itemid'), product);
            });

            index++;
        });
    } else {
        $('#panierContent').append("<p>Pas d'articles dans le panier</p>");
    }
}