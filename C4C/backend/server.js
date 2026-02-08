// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Ngo = require("./models/Ngo");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// server.js
mongoose.connect("mongodb://127.0.0.1:27017/c4c", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// GET /api/ngos?sector=&location=
app.get("/api/ngos", async (req, res) => {
  try {
    const { sector = "All", location = "All" } = req.query;

    const query = {};
    if (sector !== "All") query.sector = { $regex: new RegExp(`^${sector}$`, "i") };
    if (location !== "All") query.location = { $regex: new RegExp(location, "i") };

    const ngos = await Ngo.find(query);
    res.json(ngos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
