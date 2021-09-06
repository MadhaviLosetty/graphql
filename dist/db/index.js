"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
/*
  Code pattern used to make connections and queries.
  Pattern referred from https://node-postgres.com/guides/project-structure
*/
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    connectionString: 'postgresql://admin:P@ssw0rd123@localhost:5432/graphqldb'
});
//# sourceMappingURL=index.js.map