export const isRequired = (value: string | number, message = 'Required') => {
  return value ? '' : message;
};

export const isValidEmail = (email: string, message = 'Invalid email') => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return message;
  }
  return '';
};

export const isValidPassword = (password: string, message = 'Invalid password') => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,30}$/;
  if (!regex.test(password)) {
    return message;
  }
  return '';
};
