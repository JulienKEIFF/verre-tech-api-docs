
/**
 * @openapi
 * /api/product:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Products
 *     description: Create new Product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               image:
 *                 type: file
 *               categId:
 *                 type: integer
 *               height:
 *                 type: number
 *               depth:
 *                 type: number
 *               length:
 *                 type: number
 *               color:
 *                 type: string
 *             required:
 *               - name
 *               - price
 *               - description
 *               - categId
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when create a new product
 */



/**
 * @openapi
 * /api/products:
 *   get:
 *     tags:
 *       - Products
 *     description: Get all product
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get all product
 */

/**
 * @openapi
 * /api/product/{productId}:
 *   get:
 *     tags:
 *       - Products
 *     description: Get one Product
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Product'
 *       500:
 *         description: An error occured when get a product
 */
/**
 * @openapi
 * /api/product/{productId}:
 *   delete:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Products
 *     description: Delete one Product
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *            schema:
 *              type: integer
 *       500:
 *         description: An error occured when delete a product
 */
/**
 * @openapi
 * /api/product/{productId}:
 *   patch:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Products
 *     description: Modify a product
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               image:
 *                 type: file
 *               categId:
 *                 type: integer
 *             required:
 *               - name
 *               - price
 *               - description
 *               - categId
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when update a product
 */



/**
 * @openapi
 * /api/products/top:
 *   get:
 *     tags:
 *       - Products
 *     description: get top product
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get top product
 */

/**
 * @openapi
 * /api/products/best:
 *   get:
 *     tags:
 *       - Products
 *     description: get best product
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get best product
 */

/**
 * @openapi
 * /api/products/search:
 *   get:
 *     tags:
 *       - Products
 *     description: get best product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               maxprice:
 *                 type: number
 *               minprice:
 *                 type: number
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/ProductList'
 *       500:
 *         description: An error occured when get best product
 */

/**
 * @openapi
 * /api/info/product/{idProduct}:
 *   post:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Info Product
 *     description: Create new info for a product
 *     summary: Add a new info product
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         schema:
 *           type: integer
 *         description: id of Product to add info
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               height:
 *                 type: number
 *               depth:
 *                 type: string
 *               length:
 *                 type: file
 *               color:
 *                 type: string
 *             required:
 *               - idProduct
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Info_product'
 *       500:
 *         description: An error occured when create a new information product
 */


/**
 * @openapi
 * /api/info/{idInfo}:
 *   delete:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Info Product
 *     description: Delete one information for a product
 *     parameters:
 *       - in: path
 *         name: idInfo
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference Information
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *            schema:
 *              type: integer
 *       500:
 *         description: An error occured when delete a information product
 */


/**
 * @openapi
 * /api/info/{idInfo}:
 *   patch:
 *     security:
 *       - jwt: []
 *     tags:
 *       - Info Product
 *     description: Modify a information product
 *     parameters:
 *       - in: path
 *         name: idInfo
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference information product
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               idProduct:
 *                 type: integer
 *               height:
 *                 type: number
 *               depth:
 *                 type: string
 *               length:
 *                 type: file
 *               color:
 *                 type: string
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Info_product'
 *       500:
 *         description: An error occured when update a information product
 */

/**
 * @openapi
 * /api/info/product/{productId}:
 *   get:
 *     tags:
 *       - Info Product
 *     description: Get Information for one product
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id to reference product
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Info_product'
 *       500:
 *         description: An error occured when get a information for a product
 */


/**
 * @openapi
 * /api/categ/list:
 *   get:
 *     tags:
 *       - Categorie Product
 *     summary: Get information for all categories
 *     description: Get the name and id for all categories
 *     parameters:
 *       - in: query
 *         name : page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The number of page
 *       - in: query
 *         name : size
 *         schema:
 *           type: integer
 *           default: 3
 *         required: false
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/CategorieList'
 *       500:
 *         description: An error occured when get the name and id for all categories
 */

/**
 * @openapi
 * /api/categ/{categId}/products:
 *   get:
 *     tags:
 *       - Categorie Product
 *     summary: Get products by categId
 *     description: Get all products in categ
 *     parameters:
 *      - in: path
 *        name: categId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id to reference categ
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
 *         description: Operation summary
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/CategorieList'
 *       500:
 *         description: An error occured when get all products in categ
 */
