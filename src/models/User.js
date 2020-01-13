const mongoose = require("mongoose");
const Joi = require("joi");
const JoiValidate = require("../utils/JoiValidate");
const bcrypt = require("bcryptjs");

/**
 * @swagger
 * definitions:
 *  User:
 *     type: "object"
 *     properties:
 *       firstName:
 *         type: "string"
 *       lastName:
 *         type: "string"
 *       email:
 *         type: "string"
 *         example: "string@gmail.com"
 *       password:
 *         type: "string"
 *       passwordConfirmation:
 *         type: "string"
 *       gender:
 *         type: "string"
 *         enum: ["male", "female"]
 *         example: "male"
 *       dateOfBirth:
 *         type: "string"
 *         example: "1998-11-19"
 */
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
      required: true
    },
    dateOfBirth: {
      type: Date,
      default: new Date("1970-01-01"),
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

UserSchema.virtual("fullName").get(function() {
  return this.firstName + " " + this.lastName;
});

UserSchema.methods.hashPassword = function() {
  const salt = 10;
  this.password = bcrypt.hashSync(this.password, salt);
};

UserSchema.methods.comparePassword = function(comPass) {
  return bcrypt.compareSync(comPass, this.password);
};

UserSchema.virtual("age").get(function() {
  let ageDifMs = Date.now() - this.dateOfBirth.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
});

const listSchemaValidate = {
  createUser: Joi.object().keys({
    firstName: Joi.string()
      .min(3)
      .max(10)
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(20)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required(),
    passwordConfirmation: Joi.any()
      .valid(Joi.ref("password"))
      .required(),
    gender: Joi.string()
      .valid("male", "female")
      .required(),
    dateOfBirth: Joi.date()
      .options({ convert: true })
      .required()
  }),
  loginUserByEmail: Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  })
};
//custom validate function in model base on JoiValidater
UserSchema.statics.validateWithJoi = function(object, schemaValidateName) {
  validator = JoiValidate.validateData(
    object,
    listSchemaValidate[schemaValidateName]
  );
  return validator;
};

UserSchema.statics.exist = async (criteria) => {
  try {
    const count = await UserSchema.countDocuments(criteria);
    if (count > 0) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
module.exports = mongoose.model("User", UserSchema);
