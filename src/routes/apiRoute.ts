import { Router } from 'express'
import { deactivate, block, notify } from 'src/controllers/apiController'


/**
 * @swagger
 * tags:
 *   name: APITest
 *   description: Api for testing
 */

const apiRouter = Router()

/**
 * @swagger
 * /deactivate:
 *   post:
 *     summary: Endpoint to deactivate.
 *     tags: [APITest]
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Server Error
 */
apiRouter.post(
    '/deactivate',
    deactivate
)

/**
 * @swagger
 * /block:
 *   post:
 *     summary: Endpoint to block.
 *     tags: [APITest]
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Server Error
 */
apiRouter.post(
    '/block',
    block
)

/**
 * @swagger
 * /notify:
 *   post:
 *     summary: Endpoint to notify.
 *     tags: [APITest]
 *     responses:
 *       200:
 *         description: Ok
 *       500:
 *         description: Server Error
 */
apiRouter.post(
    '/notify',
    notify
)

export default apiRouter
