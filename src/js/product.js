// This file is responsible for handling the "Add to Cart" functionality.
import { setLocalStorage, getLocalStorage , loadHeaderFooter} from "./utils.mjs";
import ProductData from "./ProductData.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");

function addProductToCart(product) {
let cart = getLocalStorage("so-cart");
if (!Array.isArray(cart)) {
    cart = cart ? [cart] : [];
}
cart.push(product);
setLocalStorage("so-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
