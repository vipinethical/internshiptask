const express = require("express");
const router = express.Router();
const registerTemplatecopy = require("../models/registermodels");

router.post("/register", (request, response) => {
  const registeredUser = new registerTemplatecopy({
    username: request.body.username,
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    address: request.body.address,
    phone: request.body.phone,
  });
  registeredUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
