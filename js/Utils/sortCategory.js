import getProductLS from "../Getters/getProductLS";

export default category => {
    return Array.from(getProductLS('baseProducts')).filter(function (product) {
        return product.category === category;
    })
}