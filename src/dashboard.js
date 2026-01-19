// Dashboard component
export function Dashboard({ user }) {
  return {
    widgets: ['analytics', 'reports', 'notifications'],
    user: user
  };
}
