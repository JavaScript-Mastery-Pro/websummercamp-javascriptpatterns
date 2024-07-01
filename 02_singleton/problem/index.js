const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

const users = {
  user1: "password1",
  user2: "password2",
};

// MemoryStore is a simple session store implementation that stores session data in memory
const store = new session.MemoryStore();

const sessionMiddleware = session({
  secret: "some_secret",
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: { maxAge: 60000 },
});

const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionMiddleware);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log({ username, password });

  if (users[username] && users[username] === password) {
    req.session.userId = username;
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send(`Welcome to your dashboard, ${req.session.userId}`);
});

app.post("/logout", isAuthenticated, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Logout failed");
    }
    res.clearCookie("connect.sid");
    res.send("Logout successful");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
