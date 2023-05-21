const app = require("./config/server");
const config = require("./config/config");
const PORT = config.PORT || 3005;

// forget this line, it's just for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
