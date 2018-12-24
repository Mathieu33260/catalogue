
export default (item, index) => {
    return '<a class="list-group-item list-group-item-action" id="list-' + item.id + '-list" ' +
        'data-toggle="list" href="#list-' + item.id + '" role="tab">' + index + '</a>';
}