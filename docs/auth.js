/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 *       500:
 *         description: An error occured when login
 */

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     description: register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               lastname:
 *                 type: string
 *               firstname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - lastname
 *               - firstname
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 *       500:
 *         description: An error occured when register
 */

/**
 * @openapi
 * /api/auth/validateToken:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Authentication
 *     description: Verify if token is valid
 *     responses:
 *       200:
 *         description: Token is valid
 *       500:
 *         description: Wrong token
 */

/**
 * @openapi
 * /api/auth/user:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Authentication
 *     description: Get the current user
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 *       500:
 *         description: An error occured when get current user
 */
