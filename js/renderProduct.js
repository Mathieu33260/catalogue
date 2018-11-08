
import addPanier from './addPanier.js';

export default product => {
    let div1 = document.createElement('div');
    div1.classList.add('col-lg-4');
    div1.classList.add('col-md-6');
    div1.classList.add('mb-4');
    let div2 = document.createElement('div');
    div2.classList.add('card');
    div2.classList.add('h-100');
    div1.append(div2);
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = product.image;
    div2.append(img);
    let div3 = document.createElement('div');
    div3.classList.add('card-body');
    div2.append(div3);
    let h4 = document.createElement('h4');
    h4.classList.add('card-title');
    h4.textContent = product.name;
    div3.append(h4);
    let h5 = document.createElement('h5');
    h5.textContent = product.price + ' €';
    div3.append(h5);
    let p = document.createElement('p');
    h4.classList.add('card-text');
    h4.textContent = product.description;
    div3.append(p);
    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btn');
    btnAdd.classList.add('btn-success');
    btnAdd.type = 'button';
    btnAdd.textContent = "Ajouter au panier";
    btnAdd.addEventListener('click', function () {
        addPanier(product);
    });
    div3.append(btnAdd);
    return div1;
};