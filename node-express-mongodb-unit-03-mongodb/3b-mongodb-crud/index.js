/*
    0. Starter code - Modules
*/
const express = require("express");
const app = express();
const logger = require("morgan");

/*
    3. Import the database connection function.
*/

/*
    0. Starter code - Middleware
*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

/*
    7. Import and connect the router
*/

/*
    0. Starter code - Server start
*/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`);
    /*
        4. Establish the database connection when the server runs
      */
});
