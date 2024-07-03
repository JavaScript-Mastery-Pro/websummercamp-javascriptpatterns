class NotificationAdapter {
  async send(message, recipient) {
    throw new Error("Method 'send' must be implemented");
  }
}

class EmailAdapter extends NotificationAdapter {
  async send(message, recipient) {
    // Email sending logic here
  }
}

class SMSAdapter extends NotificationAdapter {
  async send(message, recipient) {
    // SMS sending logic here
  }
}

class SlackAdapter extends NotificationAdapter {
  async send(message, recipient) {
    // Slack sending logic here
  }
}

async function sendNotification(adapter, message, recipient) {
  try {
    await adapter.send(message, recipient);
    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
}

const emailAdapter = new EmailAdapter("your-email@gmail.com", "your-password");
const smsAdapter = new SMSAdapter("your-twilio-account-sid", "your-twilio-auth-token");
const slackAdapter = new SlackAdapter("your-slack-token");

sendNotification(emailAdapter, "Hello via Email!", "recipient@example.com");
sendNotification(smsAdapter, "Hello via SMS!", "+1234567890");
sendNotification(slackAdapter, "Hello via Slack!");