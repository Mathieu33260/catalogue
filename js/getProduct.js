
export default (tab, productId) => {
    tab = tab.filter(function (product) {
        if (product.id == productId) {
            return product;
        }
    });
    return tab.length > 0 ? tab[0] : null;
};
