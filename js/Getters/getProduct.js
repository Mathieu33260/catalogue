
export default (tab, productId) => {
    return tab.find(p => p.id === productId);
};
