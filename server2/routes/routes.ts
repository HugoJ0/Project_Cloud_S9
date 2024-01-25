import { Express, Request, Response } from 'express'
import { getTest, getComposants } from '../function'


export function route(app: Express){

    app.route("/API/test")
        .post(getTest)

    app.route("/API/composants")
        .post(getComposants)
}

