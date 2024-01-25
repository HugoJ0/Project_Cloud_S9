import { Request, Response } from 'express'
const fs = require("fs")


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "test1234",
    database: "composantsPc"
});

con.connect();

export async function getTest(req: Request, res: Response){
    const data = "Test OK";
    res.status(200).json(data);
}

export async function getComposants(req: Request, res: Response) { 
    con.query("SELECT * FROM Composant", function (err: any, result: any, fields: any) {
      if (err) res.status(500).json(err);
      res.status(200).json(result);
    });
}