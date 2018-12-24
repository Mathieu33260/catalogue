
export default (type, product) => {
    return JSON.parse(localStorage.getItem(type)).some(p => (p.id === product.id))
}