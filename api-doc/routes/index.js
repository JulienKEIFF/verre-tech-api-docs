var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Users
 *     description: Get all users in database
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/UsersList'
 *       401:
 *         description: Not authenticated, you need to pass a Bearer in header
 */


module.exports = router;
