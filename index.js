'use strict'

var express = require('express')
var { makeExecutableSchema } = require('graphql-tools')
var gqlMiddleWare = require('express-graphql').graphqlHTTP
const {readFileSync} = require('fs')
const {join} = require('path')
const resolvers = require('./lib/resolvers');


// definiendo el esquema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8');
var schema = makeExecutableSchema(
  {typeDefs,resolvers}
)


/* Ejecutar node index.js
graphql(schema, '{ saludo }', root).then((response) => {
  console.log(response);
}); */

var app = express()
const port = process.env.PORT || 3000
app.use('/api', gqlMiddleWare({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))
app.listen(port, () => console.log('Now browse to localhost:' + port + '/api'))
