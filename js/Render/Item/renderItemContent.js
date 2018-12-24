
export default (product, item) => {
    return '<div class="tab-pane fade" id="list-'+ item.id +'" role="tabpanel">' +
        '      <div class="col-4">' +
        '        <img class="mw-100" src="' + product.image + '" alt="' + product.name + '">' +
        '      </div>' +
        '      <div class="flex-column col-6">' +
        '        <p>' + product.description + '</p>' +
        '        <p>' + product.category + '</p>' +
        '        <p>' + product.price + '€</p>' +
        '      </div>' +
        '          <select style="background-color: ' + item.color + '" itemid="' + item.id + '" ' +
        'class="form-control selectItem" id="colorSelect' + item.id + '">\n' +
        '            <option style="background-color: ' + item.color + '" selected></option>\n' +
        '            <option class="bg-danger" value="red"></option>\n' +
        '            <option class="bg-primary" value="blue"></option>\n' +
        '            <option class="bg-success" value="green"></option>\n' +
        '            <option class="bg-warning" value="yellow"></option>\n' +
        '          </select>\n' +
        '</div>\n';
}