
export default (type, products) => {
    localStorage.setItem(type, JSON.stringify(products));
}