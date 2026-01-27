import ProductData from "../js/ProductData.mjs"
import ProductList from "../js/ProductList.mjs";

const dataSource = new ProductData("tents");

dataSource.getData().then(data => console.log(data));

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);

productList.init();