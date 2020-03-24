import axios from "axios";

export const handleErrors = setError => {
  setError({
    text: '1. Dashboard Coming April 2020',
    style: {borderColor: 'red'}
  });
};

export const checkAuthTimeout = expirationTime => {
  setTimeout(() => {
    logout();
  }, expirationTime * 1000);
};

export const handleRes = ({ res, setLoggedIn }) => {
  const token = res.data.key;
  const expirationDate = new Date(new Date().getTime() * 3600 * 1000);
  localStorage.setItem('token', token);
  localStorage.setItem('expirationDate', expirationDate);
  checkAuthTimeout(3600);
  setLoggedIn(true)
  console.log(res);
};

export const login = ({formData, setLoggedIn}) => {
  axios.post('http://localhost:8000/api/login/', formData)
    .then(res => handleRes({res, setLoggedIn}))
    .catch(err => console.log(err));
};

export const register = ({ formData, setLoggedIn }) => {
  axios.post('http://localhost:8000/api/registration/', formData)
    .then(res => handleRes({ res, setLoggedIn }))
    .catch(err => console.log(err));
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
};
