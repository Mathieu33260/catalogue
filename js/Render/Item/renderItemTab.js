
export default (item) => {
    return '<a style="background-color: ' + item.color + '" class="list-group-item list-group-item-action" id="list-' + item.id + '-list" ' +
        'data-toggle="list" href="#list-' + item.id + '" role="tab"></a>';
}