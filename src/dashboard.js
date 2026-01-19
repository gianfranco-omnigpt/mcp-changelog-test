// Dashboard component
export function Dashboard({ user }) {
  if (!user) {
    return { error: 'User required' };
  }
  return {
    widgets: ['analytics', 'reports', 'notifications'],
    user: user
  };
}
