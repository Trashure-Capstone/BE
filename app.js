const app = require('./config/server.js');
const config = require('./config/config.js');
const PORT = config.PORT || 3005;

const CrudTestRoute = require('./app/routes/crud_test_route.js');
const router_auth = require('./app/routes/auth_route.js');

app.use('/api/auth', router_auth);

app.use('/api/crud-test', CrudTestRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
