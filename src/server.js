const express = require("express");

const app = express();
app.use(express.json());

app.post("/details", (req, res) => {
  const { name, password, email } = req.body;
  res.json({ name, password, email });
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
