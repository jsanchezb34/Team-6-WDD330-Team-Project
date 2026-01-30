import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart");
 
  if (cartItems && Array.isArray(cartItems)) {
 
    cartItems = cartItems.filter(item => item !== null);
 
    if (cartItems.length > 0) {
 
      document.querySelector(".cart-footer").classList.remove("hide");
 
      const total = cartItems.reduce((sum, item) => sum + (item.FinalPrice || 0), 0);
      document.querySelector(".cart-total").innerText = `Total: $${total.toFixed(2)}`;
 
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));
      document.querySelector(".product-list").innerHTML = htmlItems.join("");
    } else {
      showEmptyCart();
    }
  } else {
    showEmptyCart();
  }
}
 
