import getProductLS from "./getProductLS";

export default () => {
    return [...new Set(Array.from(getProductLS('baseProducts')).map(item => item.category))];
}