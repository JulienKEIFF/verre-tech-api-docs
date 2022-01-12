/**
 * @openapi
 * 
 *  /api/order/allByUser:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Order
 *     description: searches all the commands of a user according to his id
 *     parameters:
 *       - in: path
 *         name : idUser
 *         schema: 
 *           type: integer
 *       - in: query
 *         name : page
 *         schema:
 *          type: integer
 *          default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *          type: integer
 *          default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/OrderWithIdUser' 
 * 
 * /api/order/all:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Order
 *     description: search all commands
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *          type: integer
 *          default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *          type: integer
 *          default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/Order'
 * 
 * /api/order/validate:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Order
 *     description: validate the basket, record the prices in the lines in product cart and create an order linen and enter it in product cart
 *     parameters:
 *       - in: body
 *         name : body
 *         schema:
 *          $ref: '#/definitions/ValidateInfo'
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/OrderSimple'
 * 
 * /api/order/cancel/:id:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Order
 *     description: change the status of a command to "cancel" if it is not "finish", depending on the command id
 *     parameters:
 *       - in: path
 *         name : id
 *         schema: 
 *           type: integer
 *       - in: body
 *         name : body
 *         schema: 
 *           type: objet
 *           required:
 *             - idUser
 *           properties:
 *            idUser:
 *              type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/MessageResponse' 
 * 
 * /api/order/return/:id:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Order
 *     description: change the status of a command to "return" if it is not "finish", depending on the command id
 *     parameters:
 *       - in: path
 *         name : id
 *         schema: 
 *           type: integer
 *       - in: body
 *         name : body
 *         schema: 
 *           type: objet
 *           required:
 *             - idUser
 *           properties:
 *            idUser:
 *              type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/MessageResponse' 
 */