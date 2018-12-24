
export default product => {
    let item = {
        "id": product.id + "-" + product.quantite,
        "color": product.baseColor
    };
    product.items.push(item);
}