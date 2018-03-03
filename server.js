// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
// naming this variable so we can use get.app, etc.
var PORT = process.env.PORT || 8080;