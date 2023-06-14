const app = require("./config/server.js");
const config = require("./config/config.js");

const PORT = config.PORT || 3005;

const CrudTestRoute = require("./app/routes/crud_test_route.js");
const RoleRoute = require("./app/routes/roleRoute.js");
const AuthRoute = require("./app/routes/authRoute.js");
const UserRoute = require("./app/routes/userRoute.js");
const StatusRoute = require("./app/routes/statusRoute.js");
const SampahRoute = require("./app/routes/sampahRoute.js");
const JualSampah = require("./app/routes/jualSampahRoute.js");
const imgUpload = require('./app/routes/imageRoute.js');

app.use("/api/jual-sampah", imgUpload);
app.use("/api/role", RoleRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/sampah", SampahRoute);
app.use("/api/status", StatusRoute);
app.use("/api/jual-sampah", JualSampah);
app.use("/api/crud-test", CrudTestRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
