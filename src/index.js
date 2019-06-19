//const express = require("express");

import express from "express";

const app = express();

const handleHome = (req, res) => {
  res.send("Home");
};

const aboutUs = (req, res) => {
  res.send("About Us");
};

const contact = (req, res) => {
  res.send("Contact");
};

const protect = (req, res) => {
  res.send("Protected");
};

const middleAll = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const middleProtect = (req, res, next) => {
  res.redirect("/");
};

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));

app.get("/", middleAll, handleHome);
app.get("/about-us", middleAll, aboutUs);
app.get("/contact", middleAll, contact);
app.get("/protected", middleAll, middleProtect, protect);
