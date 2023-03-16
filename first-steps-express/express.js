const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;


app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( { extended: true } ) );
//GET
app.get( "/", ( req, res, next ) => {
    res.json( { err: 0, message: "API REST" } )
} );

app.get( "/list", ( req, res, next ) => {
    res.json( { err: 0, message: "OK LIST" } )
} );

app.get( "/list/:id", ( req, res, next ) => {
    let Id = req.params.id
    res.json( { err: 0, message: `GET Filter by Id: ${Id}` } )
} );

//POST

app.post( "/list", ( req, res, next ) => {
    let datos = req.body.id
    res.json( { err: 0, message: `POST ${datos}` } )
} );

//PUT

app.put( "/list", ( req, res, next ) => {
    let datos = req.body.id
    res.json( { err: 0, message: `PUT ${datos}` } )
} );


const server = app.listen( port, () => {
    console.log(`Express in ${port}`);
} );
