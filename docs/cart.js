/**
 * @openapi
 * 
 * /api/cart:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Cart
 *     description: searches for the invalid basket of a user with his id
 *     parameters:
 *       - in: path
 *         name : idUser
 *         schema: 
 *           type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/Cart'  
 * 
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Cart
 *     description: search for a user's unvalidated basket, if it does not exist, create it, then create a product Card with the basket id, with the product id and with the quantity
 *     parameters:
 *       - in: body
 *         name : body
 *         schema: 
 *           type: objet
 *           required:
 *             - idUser
 *             - idProduct
 *             - quantity
 *           properties:
 *            idUser:
 *              type: integer 
 *            idProduct:     
 *              type: integer 
 *            quantity:     
 *              type: integer 
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/MessageResponse' 
 * 
 * /api/cart/quantityProduct:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Cart
 *     description: Change the quantity of a product in product cart if the quantity is => 0 we delete the line of the product cart
 *     parameters:
 *       - in: body
 *         name : body
 *         schema: 
 *           type: objet
 *           required:
 *             - idUser
 *             - idProduct
 *             - quantity
 *           properties:
 *            idUser:
 *              type: integer 
 *            idProduct:     
 *              type: integer 
 *            quantity:     
 *              type: integer 
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/MessageResponse'
 * 
 * /api/cart/clean/:id:
 *   delete:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Cart
 *     description: clean cart by id cart
 *     parameters:
 *       - in: path
 *         name : idUser
 *         schema: 
 *           type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/MessageResponse' 
 *     
 */