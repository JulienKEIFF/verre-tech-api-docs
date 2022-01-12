/**
 * @openapi
 * components:
 *  securitySchemes:
 *   jwt:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 * definitions:
 *  MessageResponse:
 *   type: object
 *   properties:
 *    message: 
 *     type: string
 * 
 *  Comment:
 *   type: object
 *   properties:
 *    text: 
 *     type: string
 *    rate: 
 *     type: integer
 *    idProduct: 
 *     type: integer
 *    idUser: 
 *     type: integer
 * 
 *  ListComment:
 *   type: array
 *   items:
 *    type: object
 *    properties:
 *      text: 
 *          type: string
 *      rate: 
 *          type: integer
 *      idProduct: 
 *          type: integer
 *      idUser: 
 *          type: integer
 * 
 *  NewComment:
 *   type: object
 *   properties:
 *    text: 
 *     type: string
 *    rate: 
 *     type: integer
 *    idProduct: 
 *     type: integer
 * 
 *  Cart:
 *   type: object
 *   properties:
 *    id: 
 *     type: integer    
 *    validation:
 *     type: integer
 *    cartPrice:
 *     type: number
 *    idUser:
 *     type: integer
 *    createdAt:
 *     type: string
 *    updatedAt:
 *     type: string
 *    productCarts:
 *     type: array
 *     items: 
 *      type: object
 *      properties:
 *       id: 
 *          type: integer
 *       idProduct: 
 *          type: integer
 *       unitPrice: 
 *          type: integer
 *       quantity: 
 *          type: integer
 *       createdAt: 
 *          type: string
 *       updatedAt: 
 *          type: string
 *       id_order: 
 *          type: integer
 *       id_cart: 
 *          type: integer
 * 
 *  OrderWithIdUser:
 *   type: object
 *   properties:
 *    id: 
 *     type: integer    
 *    orderToken:
 *     type: string
 *    orderPrice:
 *     type: number
 *    tradeInformation:
 *     type: string
 *    deadLineOrder:
 *     type: string
 *    createdAt:
 *     type: string
 *    updatedAt:
 *     type: string
 *    productCarts:
 *     type: array
 *     items: 
 *      type: object
 *      properties:
 *       id: 
 *          type: integer
 *       idProduct: 
 *          type: integer
 *       unitPrice: 
 *          type: integer
 *       quantity: 
 *          type: integer
 *       createdAt: 
 *          type: string
 *       updatedAt: 
 *          type: string
 *       id_order: 
 *          type: integer
 *       id_cart: 
 *          type: integer
 * 
 *  Order:
 *   type: object
 *   properties:
 *    id: 
 *     type: integer    
 *    orderToken:
 *     type: string
 *    orderPrice:
 *     type: number
 *    tradeInformation:
 *     type: string
 *    deadLineOrder:
 *     type: string
 *    createdAt:
 *     type: string
 *    updatedAt:
 *     type: string
 *    productCarts:
 *     type: array
 *     items: 
 *      type: object
 *      properties:
 *       id: 
 *          type: integer
 *       idProduct: 
 *          type: integer
 *       unitPrice: 
 *          type: integer
 *       quantity: 
 *          type: integer
 *       createdAt: 
 *          type: string
 *       updatedAt: 
 *          type: string
 *       id_order: 
 *          type: integer
 *       id_cart: 
 *          type: integer
 * 
 *  OrderSimple:
 *   type: object
 *   properties:
 *    id: 
 *     type: integer    
 *    orderToken:
 *     type: string
 *    orderPrice:
 *     type: number
 *    tradeInformation:
 *     type: string
 *    deadLineOrder:
 *     type: string
 *    createdAt:
 *     type: string
 *    updatedAt:
 *     type: string
 *    
 *  ValidateInfo:
 *   type: object
 *   properties:
 *    idUser: 
 *     type: integer    
 *    tradeInformation:
 *     type: string
 *    productList:
 *     type: array
 *     items: 
 *      type: object
 *      properties:
 *       id: 
 *          type: integer
 *       price: 
 *          type: number
 */