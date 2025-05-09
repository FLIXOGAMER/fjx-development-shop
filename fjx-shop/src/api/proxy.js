/**
 * Proxy-Modul für Frontend-API-Aufrufe
 * Dieses Modul leitet Anfragen durch den Backend-Server, um den API-Schlüssel zu schützen
 */

import axios from 'axios';

// Base URL aus Umgebungsvariablen
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

// Axios-Instance für API-Aufrufe
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Generischer GET-Request
 * @param {string} endpoint - API-Endpunkt
 * @param {Object} params - URL-Parameter
 * @returns {Promise<Object>} - API-Antwort
 */
export const get = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Error in GET ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Generischer POST-Request
 * @param {string} endpoint - API-Endpunkt
 * @param {Object} data - Request-Body
 * @returns {Promise<Object>} - API-Antwort
 */
export const post = async (endpoint, data = {}) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error in POST ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Generischer PUT-Request
 * @param {string} endpoint - API-Endpunkt
 * @param {Object} data - Request-Body
 * @returns {Promise<Object>} - API-Antwort
 */
export const put = async (endpoint, data = {}) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error in PUT ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Generischer DELETE-Request
 * @param {string} endpoint - API-Endpunkt
 * @returns {Promise<Object>} - API-Antwort
 */
export const del = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error in DELETE ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Hilfsfunktion, um den Tebex-Checkout-URL zu generieren
 * @param {number|string} productId - Produkt-ID
 * @returns {string} - Checkout-URL
 */
export const getCheckoutUrl = (productId) => {
  return `https://checkout.tebex.io/package/${productId}`;
};

// Export der API-Funktionen
export default {
  get,
  post,
  put,
  delete: del,
  getCheckoutUrl,
};