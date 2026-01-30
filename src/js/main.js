import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam('category');

const titleElement = document.querySelector('.page-title');
if (titleElement) {
  titleElement.textContent = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}

const dataSource = new ProductData();


const element = document.querySelector(".product-list");

const productList = new ProductList(category, dataSource, element);


productList.init();
