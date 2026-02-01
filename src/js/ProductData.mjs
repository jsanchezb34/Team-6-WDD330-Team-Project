//this file handles the retrieval of product data from a JSON file
const baseURL = import.meta.env.VITE_SERVER_URL

export default class ProductData {
  constructor() {
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async findProductById(id) { 
    const response = await fetch(`${this.baseURL}product/${id}`);
    const product = await response.json();
    return product; }
}


function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}