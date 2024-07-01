const twilio = require("twilio");
const nodemailer = require("nodemailer");
const { WebClient } = require("@slack/web-api");

// Function to send notifications via email
async function sendEmail(message, recipient) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "your-email@gmail.com", pass: "your-password" },
  });

  await transporter.sendMail({
    from: "no-reply@example.com",
    to: recipient,
    subject: "Notification",
    text: message,
  });
}

// Function to send notifications via SMS
async function sendSMS(message, recipient) {
  const client = twilio("your-twilio-account-sid", "your-twilio-auth-token");

  await client.messages.create({
    body: message,
    from: "+1234567890",
    to: recipient,
  });
}

// Function to send notifications via Slack
async function sendSlack(message) {
  const client = new WebClient("your-slack-token");

  await client.chat.postMessage({
    channel: "#notifications",
    text: message,
  });
}

// Main function to send notifications
async function sendNotification(service, message, recipient) {
  try {
    if (service === "email") {
      await sendEmail(message, recipient);
    } else if (service === "sms") {
      await sendSMS(message, recipient);
    } else if (service === "slack") {
      await sendSlack(message);
    } else {
      throw new Error("Unsupported notification service");
    }

    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
}

// Send notifications using different services
sendNotification("email", "Hello via Email!", "recipient@example.com");
sendNotification("sms", "Hello via SMS!", "+1234567890");
sendNotification("slack", "Hello via Slack!");
