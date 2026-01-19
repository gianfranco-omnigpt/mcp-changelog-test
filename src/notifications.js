// Notification system
export function sendNotification(userId, message) {
  console.log(`Sending to ${userId}: ${message}`);
  // TODO: implement real notification service
  return true;
}

export function scheduleNotification(userId, message, delay) {
  setTimeout(() => sendNotification(userId, message), delay);
}
