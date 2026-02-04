//this file creates the product cards and displays them.
import { renderListWithTemplate } from "./utils.mjs";


function productCardTemplate(product) {
  
  const brandName = product.Brand?.Name || "";
  const discountPercent = Math.round(((product.Price - product.FinalPrice) / product.Price) * 100);
  
  // 1. Initialize an empty string
  let discountHTML = '';

  if (discountPercent > 0) {
    discountHTML = `<span>(${discountPercent}% OFF)</span>`;
  } else {
    discountHTML = ''; // stays empty if no difference
  }

  return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${brandName}</h2>
        <h3>${product.Name}</h3>
          <p class="product-card__price">
            $${product.FinalPrice.toFixed(2)} 
            ${discountHTML} 
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