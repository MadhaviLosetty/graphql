"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema/schema");
const index_1 = require("./db/index");
// To run a webserver
const app = express();
// Mount a GraphQL API server on the '/graphql' single end point to express middleware
app.use('/api', express_graphql_1.graphqlHTTP({
    schema: schema_1.schema,
    graphiql: true,
    context: {
        pool: index_1.pool
    }
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
//# sourceMappingURL=index.js.map