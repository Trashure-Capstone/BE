const app = require("./config/server");
const config = require("./config/config");
const PORT = config.PORT || 3005;

const CrudTestRoute = require("./app/routes/crud_test_route.js");
// forget this line, it's just for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/crud-test", CrudTestRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
