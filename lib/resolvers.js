'use strict';
const mutations = require('./mutations');
const queries = require('./queries');
// Configurar los resolvers
module.exports = 
{
    Query:queries,
    Mutation:mutations
}
    
