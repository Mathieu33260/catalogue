
import addPanier from './addPanier.js';

export default product => {
    let div1 = document.createElement('div');
    div1.classList.add('col-lg-4');
    div1.classList.add('col-md-6');
    div1.classList.add('mb-4');

    $(div1).append('<div class="card h-100">\n' +
        '      <img class="card-img-top" src="' + product.image + '">\n' +
        '      <div class="card-body">\n' +
        '         <h4 class="card-title">' + product.name + '</h4>\n' +
        '         <h5>' + product.price + '</h5>\n' +
        '         <p class="card-text">' + product.description + '</p>\n' +
        '         <button id="addPanier' + product.id + '" class="btn btn-success" type="button">Ajouter au panier</button>\n' +
        '      </div>\n' +
        '   </div>');

    $('#addPanier' + product.id).click(function () {
        addPanier(product);
    });

    return div1;
};