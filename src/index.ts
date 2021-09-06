import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema/schema'
import { pool } from './db/index'

// To run a webserver
const app = express();

// Mount a GraphQL API server on the '/graphql' single end point to express middleware
app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true, // Enables GraphiQL tool to manually issue GraphQL queries. Useful in dev
    context: { 
        pool : pool
    }
}))

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    () => { console.log(`Server running on port ${PORT}`) }
)