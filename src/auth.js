// Authentication module
export function login(username, password) {
  if (!username || !password) {
    throw new Error('Username and password required');
  }
  if (username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }
  return authenticate(username, password);
}

function authenticate(user, pass) {
  // Implementation here
  return true;
}
