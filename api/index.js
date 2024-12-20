const express = require("express");
const userRoute = require("./src/routes/user.route");

const app = express();
const port = 8080;

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
