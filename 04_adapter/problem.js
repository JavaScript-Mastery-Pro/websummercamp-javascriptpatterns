const twilio = require("twilio");
const nodemailer = require("nodemailer");
const { WebClient } = require("@slack/web-api");

async function sendNotification(service, message, recipient) {
  try {
    if (service === "email") {
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
    } else if (service === "sms") {
      const client = twilio("your-twilio-account-sid", "your-twilio-auth-token");

      await client.messages.create({
        body: message,
        from: "+1234567890",
        to: recipient,
      });
    } else if (service === "slack") {
      const client = new WebClient("your-slack-token");

      await client.chat.postMessage({
        channel: "#notifications",
        text: message,
      });
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
