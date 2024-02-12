const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));


// ==========================================================
//  It is used macking connection on the database to 
//  stored data on database.
// ==========================================================
require("./database/connection");


// ==========================================================
//  It is used to display on console to which url is called.
// ==========================================================
const morgan = require("morgan");
app.use(morgan('tiny'));


// ==========================================================
//  It is used to incomming data to convert into the json.
// ==========================================================
const bodyParser = require("body-parser");
app.use(bodyParser.json());


// ==========================================================
//  It is used to secure the path for router url path
// ==========================================================
const { default: helmet } = require("helmet");
app.use(helmet());


// ==========================================================
//  It is used to cross router to call the apis
// ==========================================================
const cors = require("cors");
app.use(cors());



// ============================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//         Access All Router to get and Post Data
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ============================================================

// app.use(require("./authentication/user_auth"));


app.use(require("./routers/catagory/get_catagory"));
app.use(require("./routers/catagory/post_catagory"));


app.use(require("./routers/orderItems/get_orderItems"));
app.use(require("./routers/orderItems/post_orderItems"));


app.use(require("./routers/orders/get_orders"));
app.use(require("./routers/orders/post_orders"));


app.use(require("./routers/products/get_product"));
app.use(require("./routers/products/post_product"));


app.use(require("./routers/users/get_user"));
app.use(require("./routers/users/post_user"));


// ============================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//         Access Server to fetch the data ...
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ============================================================

const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;


app.listen(PORT,() => {
    console.log(`Your app is running on port ${PORT}....`);
})