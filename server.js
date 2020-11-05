const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4202;

app.use(cors());
app.use(bodyParser.json());


// serve our static html file
app.use(express.static("./dist/front"));

// serve angular application
app.get("/*", (req, res) => {
    res.sendFile("index.html", {
        root: "dist/front"
    })
});

// start server listening
app.listen(PORT, () => {
    console.log(`Application running on port:${PORT}`);
});