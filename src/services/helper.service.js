export const BASE_URL =`https://a2z-backend.onrender.com`;
export const PRODUCT_PAGE_SIZE = 5;
export const ADMIN_ORDER_PAGE_SIZE = 10;
export const USER_PAGE_SIZE = 10;
export const SOTRE_PAGE_PRODUCT_SIZE = 9;
export const PAYMENT_STATUS = "NOTPAID";
export const ORDER_STATUS = "PENDING";

export const getUserImageUrl = (userId) => {
  return `${BASE_URL}/users/image/${userId}`;
};

export const getProductImageUrl = (productId) => {
  return `${BASE_URL}/products/image/${productId}`;
};

export const formatDate = (timeInLongs) => {
  if (!timeInLongs) {
    return null;
  }
  const date = new Date(timeInLongs);
  return date.toLocaleString();
};
