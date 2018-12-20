
export default (tab, itemId) => {
    tab = tab.filter(function (item) {
        return item.id == itemId;
    });
    return tab.length > 0 ? tab[0] : null;
};
