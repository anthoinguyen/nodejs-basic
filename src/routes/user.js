const express = require("express")
const router = express.Router();
const userController = require("../controllers/UserController");

/**
 * @swagger
 * /user/sign-up:
 *    post:
 *      tags:
 *      - "User"
 *      summary: "Register new account!"
 *      description: ""
 *      parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Created user object"
 *         required: true
 *         schema:
 *          $ref: "#/definitions/User"
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.post("/sign-up", userController.create);
/**
 * @swagger
 * /user/sign-in:
 *    post:
 *      tags:
 *      - "User"
 *      summary: "Login!"
 *      description: ""
 *      parameters:
 *       - in: "body"
 *         name: "body"
 *         required: true
 *         schema:
 *          type: "object"
 *          properties:
 *              email:
 *                  type: "string"
 *                  example: "string@gmail.com"
 *              password:
 *                  type: "string"
 *                  example: "string"
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.post("/sign-in", userController.login);

module.exports = router;
