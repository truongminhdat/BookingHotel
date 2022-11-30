const express = require("express");
const app = express();
const port = 8001;
const bodyParser = require("body-parser");
const setAssociation = require("./models/association");
const authRouter = require("./Router/auth.router");
// const sendMailRouter = require("./Router/sendMail.router");
// //;
// const userRouter = require("./Router/user.router");
setAssociation();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// app.use("/email/service", sendMailRouter);
app.use("/auth", authRouter);
// app.use("/user/", userRouter);

app.listen(port, () => {
  console.log(`Error running server ${port}`);
});
