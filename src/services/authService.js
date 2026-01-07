import axios from 'axios';
import API_BASE_URL from 'js/urlHelper';

const login = async (email, password, rememberMe) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/login`,
    { email, password, remember_me: rememberMe },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

const forgotPassword = async (dni) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/forgot-password`,
    { dni },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

const authService = {
  login,
  forgotPassword,
};

export default authService;