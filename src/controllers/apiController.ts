import { NextFunction, Request, Response } from 'express'

const deactivate = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log('llega a desactivar')
        response.status(400);
        response.send({ message: 'Ok!', description: 'test' })
    } catch (error) {
        next(error)
    }
}

const block = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log('llega a bloquear')
        response.send({ message: 'successful block!' })
    } catch (error) {
        next(error)
    }
}

const notify = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(request.headers)
        console.log('start timer')
        await delay(2000)
        console.log('after 2 second')
        response.status(504);
        response.send({ message: 'Ok!', description: 'test' })
    } catch (error) {
        next(error)
    }
}

function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

export { deactivate, block, notify }
