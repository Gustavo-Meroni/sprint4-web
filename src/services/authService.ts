import axios from 'axios';

const API_URL = 'https://backend-vitalcare.onrender.com/api';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};
