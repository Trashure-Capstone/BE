##Table of Contents
-[Folder Structure](#structure-folder)
-[Application Configuration](#Application-Configuration)
-[Application Usage](#Application-Usage)
-[API Documentation](#API-Documentation)

##Folder Structure
- `app`: Directory that contains the application code.
- `controllers`: Directory that contains Express controllers.
- `models`: Directory that contains Sequelize model definitions.
- `repositories`: Directory that contains repositories used to access the database.
- `routes`: Directory that contains Express route definitions.
- `services`: Directory that contains business logic.
- `utils`: Directory that contains utility functions used in the application.
- `config`: Directory that contains application configuration.
- `config.js`: File that contains general configuration.
- `db.js`: File that contains database connection configuration.
- `server.js`: File that contains HTTP server configuration.
- `migrations`: Directory that contains Sequelize database migration definitions.
- `node_modules`: Directory that contains Node.js dependencies.
- `test`: Directory that contains test files.
- `.env`: File that contains environment variables for the application.
- `.gitignore`: File that contains a list of files and directories ignored by Git.
- `package.json`: Node.js project configuration file.
- `README.md`: File that contains project description and documentation.

##Application Configuration

Application configuration can be found in the config directory. The config.js file contains general configuration such as the application port, while db.js contains the database connection configuration. The server.js file contains the configuration for the HTTP server, including middleware and route definitions.

##Application Usage

Before running the application, make sure you have set the required environment variables in the .env file. Then, you can run the application by executing the npm start command. The application will run on the port specified in the config.js file.

To test the application, you can run the npm test command. The application will be tested using the test files located in the test directory.

##API Documentation

Please refer to the following link for detailed API documentation: [API Documentation](https://documenter.getpostman.com/view/20046004/2s93shz9bv)
