import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { getDomains } from '../resolvers/domain'
import { getProfiles } from '../resolvers/profiles';
import { profile } from '../types/profile';
import { domain } from '../types/domain';
import { getciraconfigs } from '../resolvers/cira';

const paginationArgs = {
  first: {
    type: GraphQLInt,
    defaultValue: 2
  },
  offset: {
    type: GraphQLInt
  }
}

// Represents all of the possible entry points into the GraphQL API
// Resolvers are functions which are called when a field is executed.
export const QueryRoot = new GraphQLObjectType({
    name: 'Query',
    fields: {
      domains: {
        type: new GraphQLList(domain),
        args: {
          name: {
            type: GraphQLString
          }, ...paginationArgs          
        },
        description: 'Handler to get domains',
        resolve: getDomains
      },
      profiles: {
        type: new GraphQLList(profile),
        description: 'Handler to get profiles',
        args: {
          name: {
            type: GraphQLString
          }, ...paginationArgs
        },
        resolve: getProfiles
      },
      ciraconfigs: {
        type: new GraphQLList(profile),
        description: 'Handler to get CIRA configs',
        args: {
          name: {
            type: GraphQLString
          }, ...paginationArgs
        },
        resolve: getciraconfigs
      },
    }
  })