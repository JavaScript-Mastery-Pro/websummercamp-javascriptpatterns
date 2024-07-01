const twilio = require("twilio");
const nodemailer = require("nodemailer");
const { WebClient } = require("@slack/web-api");

// Email adapter function
const createEmailAdapter = (config) => async (message, recipient) => {
  const transporter = nodemailer.createTransport(config);
  await transporter.sendMail({
    from: "no-reply@example.com",
    to: recipient,
    subject: "Notification",
    text: message,
  });
};

// SMS adapter function
const createSMSAdapter =
  (accountSid, authToken) => async (message, recipient) => {
    const client = twilio(accountSid, authToken);
    await client.messages.create({
      body: message,
      from: "+1234567890",
      to: recipient,
    });
  };

// Slack adapter function
const createSlackAdapter = (token, channel) => async (message) => {
  const client = new WebClient(token);
  await client.chat.postMessage({
    channel,
    text: message,
  });
};

// Function to send notifications
const sendNotification = async (adapter, message, recipient) => {
  try {
    await adapter(message, recipient);
    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
};

// Configure the adapters
const emailAdapter = createEmailAdapter({
  service: "gmail",
  auth: { user: "your-email@gmail.com", pass: "your-password" },
});

const smsAdapter = createSMSAdapter(
  "your-twilio-account-sid",
  "your-twilio-auth-token"
);

const slackAdapter = createSlackAdapter("your-slack-token", "#notifications");

// Send notifications using different adapters
sendNotification(emailAdapter, "Hello via Email!", "recipient@example.com");
sendNotification(smsAdapter, "Hello via SMS!", "+1234567890");
sendNotification(slackAdapter, "Hello via Slack!");
