import { get, post } from "../api/index.js";

/**
 * 
 * @returns 
 */
export const getAllProducts = async () => {
  return await get("/products")
};

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const getProductById = async id => {
  return await get(`/products/${id}`)
};

/**
 * 
 * @returns 
 */
export const getProductsCart = async cart => {
  return await Promise.all(cart.map(async item => {
    const product = await getProductById(item._id);
    return { ...product, _id: item._id, color: item.color, quantity: item.quantity };
  }));
};

/**
 * 
 * @param {*} data 
 * @returns 
 */
export const orderProducts = async data => {
  return await post("/products/order" , data)
};