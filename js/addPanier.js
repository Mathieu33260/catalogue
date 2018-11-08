
export default product => {
    let products = new Set();
    if (localStorage.getItem('products')) {
        products = new Set(JSON.parse(localStorage.getItem('products')));
    }
    products.add(product);
    localStorage.setItem('products', JSON.stringify(Array.from(products)));
}