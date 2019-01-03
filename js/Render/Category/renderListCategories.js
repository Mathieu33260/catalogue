import renderCategory from "./renderListCategory";
import renderAllProducts from "../Product/renderAllProducts";
import sortCategory from "../../Utils/sortCategory";
import getCategories from "../../Getters/getCategories";
import getProductLS from "../../Getters/getProductLS";

export default () => {
    let listCategory = $('#list-category');
    listCategory.empty();
    listCategory.append("<a href='#' id='allCategory' class='list-group-item'>Tout</a>");
    $('#allCategory').click(function () {
        renderAllProducts(getProductLS('baseProducts'));
    });
    let categories = getCategories();
    categories.forEach(function (category) {
        listCategory.append(renderCategory(category));
        $('#' + category).click(function () {
            renderAllProducts(sortCategory(category));
        })
    })
}