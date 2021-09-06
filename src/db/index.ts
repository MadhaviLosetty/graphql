/*
  Code pattern used to make connections and queries.
  Pattern referred from https://node-postgres.com/guides/project-structure
*/
import { Pool } from 'pg'

export const pool = new Pool({
    connectionString: 'postgresql://admin:P@ssw0rd123@localhost:5432/graphqldb'
})
