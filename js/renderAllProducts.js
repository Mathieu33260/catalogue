
import renderProduct from './renderProduct';

export default products => {
    $('#products').empty();
    products.forEach(function (product) {
        $('#products').append(renderProduct(product));
    });
}