require("dotenv").config();
const axios = require("axios");
const SERVICE_URL = process.env.SERVICE_URL;

const axiosInstance = axios.create({
  baseURL: SERVICE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

module.exports = axiosInstance;
