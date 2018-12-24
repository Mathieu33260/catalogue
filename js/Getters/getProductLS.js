
export default type => {
    return new Set(JSON.parse(localStorage.getItem(type)));
}