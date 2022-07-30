/**
 * @swagger
 *  /user/login:
 *    post:
 *      tags:
 *      - user
 *      summary: 유저 로그인
 *      description: 유저 로그인
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: Body
 *          required: true
 *          description :
 *          schema:
 *              $ref: '#/definitions/UserLogin'
 */
