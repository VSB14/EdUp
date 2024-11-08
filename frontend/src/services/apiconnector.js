// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }

import axios from "axios";

// Create an axios instance with a base URL
export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000/api/v1', // Adjust this if your server uses a different base URL
  baseURL: 'https://ed-up-backend.vercel.app/', // Adjust this if your server uses a different base URL
  headers: {
    'Content-Type': 'application/json', // Set default headers for JSON requests
  },
  timeout: 5000, // Optional timeout setting (5 seconds here)
});

// apiConnector function for making API requests
export const apiConnector = async (method, url, bodyData = {}, headers = {}, params = {}) => {
  try {
    // Make the API request using the axios instance
    const response = await axiosInstance({
      method,       // HTTP method ('GET', 'POST', etc.)
      url,          // The endpoint URL (will be appended to the base URL)
      data: bodyData, // Request body data (optional, only for POST, PUT, etc.)
      headers,      // Optional custom headers (you can override or add to defaults)
      params,       // Optional query parameters (for GET requests, etc.)
    });
    
    return response; // Return the response from the server
  } catch (error) {
    console.error("API ERROR:", error);
    throw error; // Rethrow error to handle it in the calling function
  }
};