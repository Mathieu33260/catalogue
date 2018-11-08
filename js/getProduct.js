
export function getProduct (tab, productId) {
    tab.forEach(function (product) {
        return product.id === productId;
    });
    return null;
};
