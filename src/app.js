const express = require("express");
const morgan = require("morgan");
const api = require("./routes/api.route");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

// serves static assets
app.use(express.static(__dirname + "\\view"));

// api routes
app.use("/api/v1", api);

// starts the server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
