/* Dependencies */
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./data/db');
// const { connect } = require("./mongoose/connect");

const userRouter = require('./routes/user_router');
const inputDataRouter = require('./routes/inputData_router');
const resultRouter = require('./routes/result_router');
const templateRouter = require('./routes/template_router');
/* app */
const app = express();
const PORT = 3500;

/* Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

/* Routes */
// const apiVersion = `/api/v${Number(process.env.VERSION)}`;
// app.use(apiVersion + "/user", userRouter);

/* MongoDB */
// (async () => await connect())();

// if (process.env.NODE_ENV !== "test") {
//     (async () => await connect())();
// }
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});
const apiVersion = `/api/v${Number(process.env.VERSION)}`;
app.use(apiVersion, userRouter);
app.use(apiVersion, inputDataRouter);
app.use(apiVersion, resultRouter);
app.use(apiVersion, templateRouter);
// app.use(apiVersion, templateRouter);
/* Port listener */
// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Listening on port: ${PORT}`);
// });

// module.exports = app;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));