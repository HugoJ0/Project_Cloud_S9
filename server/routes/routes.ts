import { Express, Request, Response } from 'express'
import { getProductCompat, getProductsCompat, getProduct, getProducts, getTest } from '../compat'


export function route(app: Express){
    app.route("/API/products")
        .post(getProducts)

    app.route("/API/product")
        .post(getProduct)

    app.route("/API/productsCompat")
        .post(getProductsCompat)
    
    app.route("/API/productCompat")
        .post(getProductCompat)

    app.route("/API/test")
        .post(getTest)
}

