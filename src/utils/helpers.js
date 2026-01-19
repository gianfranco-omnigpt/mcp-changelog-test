// Helper utilities
export const formatDate = (date) => {
  return new Date(date).toISOString();
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
