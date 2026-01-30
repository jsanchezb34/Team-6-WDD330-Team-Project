const baseURL = import.meta.env.VITE_SERVER_URL;

// Handles retrieval of product data from API
export default class ProductData {
  constructor() {}

  async getData(category) {
    console.log(`${baseURL}products/search/${category}`);

    const response = await fetch(
      `${baseURL}products/search/${category}`
    );
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id, category) {
    const products = await this.getData(category);
    return products.find((item) => item.Id === id);
  }
}

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}
