
export default products => {
    return Array.from(products).sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id);
    });
}