
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const boardsRoutes = require("./src/routes/boardsRoutes");

const cardsRoutes = require("./src/routes/cardsRoutes");
const app = express();
const port = 3000;

// Enable CORS middleware to handle cross-origin requests
app.use(cors());

// Use morgan for logging requests
app.use(morgan("dev"));

// Middleware to parse JSON request bodies
app.use(express.json());

//Base route
app.get("/", (req, res) => {
    res.send("Hello from the backend -- You are currently at the / route");
  });

// Boards routes
app.use("/boards", boardsRoutes);

// Cards routes
app.use("/cards", cardsRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });