
export default product => {
    let div1 = document.createElement('div');
    div1.classList.add('col-lg-4');
    div1.classList.add('col-md-6');
    div1.classList.add('mb-4');

    $(div1).append('<div class="card h-100">\n' +
        '      <img class="card-img-top" src="' + product.image + '">\n' +
        '      <div class="card-body">\n' +
        '         <h4 class="card-title">' + product.name + '</h4>\n' +
        '         <h5>' + product.price + '€</h5>\n' +
        '         <p class="card-text">' + product.description + '</p>\n' +
        '          <select style="background-color: ' + product.baseColor + '" itemid="' + product.id + '" class="form-control selectProduct" id="baseColorSelect' + product.id + '">\n' +
        '            <option style="background-color: ' + product.baseColor + '" selected></option>\n' +
        '            <option class="bg-danger" value="red"></option>\n' +
        '            <option class="bg-primary" value="blue"></option>\n' +
        '            <option class="bg-success" value="green"></option>\n' +
        '            <option class="bg-warning" value="yellow"></option>\n' +
        '          </select>\n' +
        '         <button id="addCart' + product.id + '" itemid="' + product.id + '" class="btn btn-success btnAddCart" type="button">Ajouter au panier</button>\n' +
        '      </div>\n' +
        '   </div>');

    return div1;
};