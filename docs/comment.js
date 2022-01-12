/**
 * @openapi
 * /api/comment/all:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Comment
 *     description: search all comments
 *     parameters:
 *      - in: query
 *        name : page
 *        schema:
 *          type: integer
 *          default: 1
 *        required: false
 *        description: The number of page
 *      - in: query
 *        name : size
 *        schema:
 *          type: integer
 *          default: 3
 *        required: false
 *        description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/ListComment' 
 * 
 * /api/comment:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Comment
 *     description: create a comment header
 *     parameters:
 *       - in: body
 *         name : body
 *         schema: 
 *          $ref: '#/definitions/NewComment' 
 *       - in: header
 *         name: Authorization
 *         type: string
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/Comment' 
 * 
 *   delete:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Comment
 *     description: Delete a comment
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/MessageResponse' 
 * 
 * 
 * /api/comment/product/:idProduit:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Comment
 *     description: searches all reviews for a product based on its id
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
 *       - in: path
 *         name: idProduit
 *         type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/ListComment' 
 * 
 * /api/comment/:id:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Comment
 *     description: search for a comment
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *     responses:
 *       200:
 *         description: succesful operation
 *         content:
 *           application/json:
 *            schema: 
 *             $ref: '#/definitions/Comment' 
 * 
 * 
 * /api/comment/user/:idUser:
 *   get:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Comment
 *     description: searches all comments for a user based on their id
 *     parameters:
 *       - in: path
 *         name: idUser
 *         type: integer
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
 *             $ref: '#/definitions/ListComment' 
 * 
 */