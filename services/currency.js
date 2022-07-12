const API_URL =
  "https://openexchangerates.org/api/latest.json?app_id=d897af2a42aa4416bdf01c42cd9cef12";

const getLatest = async () => {
  console.log("llega a llamar a la api?");
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching products");
  }
};

const getOneProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching product");
  }
};

module.exports = { getLatest, getOneProduct };
