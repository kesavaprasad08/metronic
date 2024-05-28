const express = require("express");
const logger = require('./logger');
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const userRoutes = require("./routes/user");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/user", userRoutes)
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).send('Internal Server Error');
});
sequelize.sync({ force: false }).then(async (res) => {
    try {
        app.listen(3000)
    }
    catch (err) {
        logger.error(`database connection error`)
    }
}).catch(e => {
    logger.error(`Error: ${e.message}`)
})
