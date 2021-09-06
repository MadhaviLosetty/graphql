"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
// Determines queries and mutations that are available
exports.schema = new graphql_1.GraphQLSchema({
    query: queries_1.QueryRoot,
    mutation: mutations_1.MutationRoot
});
//# sourceMappingURL=schema.js.map