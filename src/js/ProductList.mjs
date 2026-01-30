//this file creates the product cards and displays them.
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  
  const hasDiscount = product.FinalPrice !== product.Price;
  const discountPercent = hasDiscount
    ? Math.round(((product.Price - product.FinalPrice) / product.Price) * 100) : 0;

  return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
         <p class="product-card__price">
          ${hasDiscount 
            ? `$${product.FinalPrice.toFixed(2)} (${discountPercent}% OFF)` 
            : `$${product.FinalPrice.toFixed(2)}`}
        </p>
      </a>
    </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    // const htmlStrings = list.map(productCardTemplate);
    // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

    // apply use new utility function instead of the commented code above
    renderListWithTemplate(productCardTemplate, this.listElement, list);

  }

}