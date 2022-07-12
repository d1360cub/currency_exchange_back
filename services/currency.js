const API_URL = "https://openexchangerates.org/api";

const getLatest = async () => {
  try {
    const response = await fetch(
      `${API_URL}/latest.json?app_id=${process.env.APP_ID}`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching products");
  }
};

/*export const getOneProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching product");
  }
};*/

console.log(getLatest());
