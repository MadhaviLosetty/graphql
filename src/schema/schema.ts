import { GraphQLSchema } from 'graphql'
import { QueryRoot } from './queries'
import { MutationRoot } from './mutations'

// Determines queries and mutations that are available
export const schema = new GraphQLSchema({
  query: QueryRoot, 
  mutation: MutationRoot
});