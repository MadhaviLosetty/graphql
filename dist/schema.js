"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = exports.schema = void 0;
// import { graphql, GraphQLObjectType, GraphQLString } from 'graphql'
const graphql_1 = require("graphql");
// const Query = new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//         hello: {
//             type: GraphQLString,
//             resolve(root) {
//               return 'world'
//             }
//           }
//     }
// })
// Construct a schema, using GraphQL schema language
exports.schema = graphql_1.buildSchema(`
  type Query {
    hello: String
  }
`);
// The root provides a resolver function for each API endpoint
exports.root = {
    hello: () => {
        return 'Hello world!';
    },
};
//# sourceMappingURL=schema.js.map