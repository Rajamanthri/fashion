const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexit

const userSchema = new mongoose.Schema({ 
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    email: { type: String, required: true }, 
    password: { type: String, required: true }, 
    verified: { type: Boolean, default: false }, 
});
