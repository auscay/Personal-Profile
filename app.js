const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const PORT = process.env.PORT


//  Set ejs as templating engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static('public'));
app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
    res.render("index");
});


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});