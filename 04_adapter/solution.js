const twilio = require("twilio");
const nodemailer = require("nodemailer");
const { WebClient } = require("@slack/web-api");

class NotificationService {
  constructor() {}

  sendNotification(message, recipient) {
    throw new Error("Method not implemented");
  }
}

class EmailAdapter extends NotificationService {
  constructor(config) {
    super();
    this.transporter = nodemailer.createTransport(config);
  }

  async sendNotification(message, recipient) {
    await this.transporter.sendMail({
      from: "no-reply@example.com",
      to: recipient,
      subject: "Notification",
      text: message,
    });
  }
}

class SMSAdapter extends NotificationService {
  constructor(accountSid, authToken) {
    super();
    this.client = twilio(accountSid, authToken);
  }

  async sendNotification(message, recipient) {
    await this.client.messages.create({
      body: message,
      from: "+1234567890",
      to: recipient,
    });
  }
}

class SlackAdapter extends NotificationService {
  constructor(token, channel) {
    super();
    this.client = new WebClient(token);
    this.channel = channel;
  }

  async sendNotification(message) {
    await this.client.chat.postMessage({
      channel: this.channel,
      text: message,
    });
  }
}

// Configure the adapters
const emailAdapter = new EmailAdapter({
  service: "gmail",
  auth: { user: "your-email@gmail.com", pass: "your-password" },
});

const smsAdapter = new SMSAdapter(
  "your-twilio-account-sid",
  "your-twilio-auth-token"
);

const slackAdapter = new SlackAdapter("your-slack-token", "#notifications");

// Function to send notifications
async function sendNotification(adapter, message, recipient) {
  try {
    await adapter.sendNotification(message, recipient);
    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
}

// Send notifications using different adapters
sendNotification(emailAdapter, "Hello via Email!", "recipient@example.com");
sendNotification(smsAdapter, "Hello via SMS!", "+1234567890");
sendNotification(slackAdapter, "Hello via Slack!");
