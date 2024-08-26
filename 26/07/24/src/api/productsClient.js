const BASE_URL = 'https://dummyjson.com/products';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorMessage = `Error: ${response.status} ${response.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return response.json();
};

export const getProductDetail = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
export const editProduct = async (id, updatedProduct) => {
  console.log('Attempting to update product:', id, updatedProduct);
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`Error updating product with ID ${id}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Updated product data:', data);
    return data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await handleResponse(response);
    return data.products; // Assicurati che l'API restituisca sempre questa struttura
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};