
export default (itemTab, itemContent, product) => {
    return "<div class='card'>" +
        "  <div class='card-header' id='heading" + product.id + "'>" +
        '    <h5 class="mb-0">' +
        '      <div class="d-flex justify-content-between row">' +
        '        <div class="form-inline d-flex justify-content-between col-5" data-toggle="collapse" ' +
        'data-target="#collapse' + product.id + '" aria-controls="collapse' + product.id + '" id="collapseControl' + product.id + '">' +
        '          <button class="btn bg-transparent border" type="button"><b>V</b></button>        ' +
        '          <button class="btn bg-transparent" type="button">' + product.name + '</button>' +
        '        </div>' +
        '        <div class="form-inline d-flex justify-content-between col-5">' +
        '          <span>' + product.price * product.quantite + '€</span>\n' +
        '          <button type="button" class="btn btn-danger btn-sm" id="suppQte' + product.id +  '">-</button>\n' +
        '          <span id="qte' + product.id +  '">' + product.quantite + '</span>\n' +
        '          <button type="button" class="btn btn-success btn-sm" id="addQte' + product.id +  '">+</button>' +
        '        </div>' +
        '      </div>' +
        '    </h5>' +
        '  </div>' +
        '  <div class="collapse" id="collapse' + product.id + '" aria-labelledby="heading' + product.id + '" data-parent="#accordion">' +
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
        "</div>";
}