const express = require("express");
const morgan = require("morgan");
const api = require("./routes/api.route");

const app = express();
const PORT = 3000;

// logging
app.use(morgan("dev"));

// serves static assets
app.use(express.static(__dirname + "\\view"));

// to parse form data
app.use(express.urlencoded({ extended: false }));

// to parse application/json
app.use(express.json());

// api routes
app.use("/api", api);

// starts the server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
