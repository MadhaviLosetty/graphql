"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryRoot = void 0;
const graphql_1 = require("graphql");
const domain_1 = require("../resolvers/domain");
const profiles_1 = require("../resolvers/profiles");
const profile_1 = require("../types/profile");
const domain_2 = require("../types/domain");
const cira_1 = require("../resolvers/cira");
const paginationArgs = {
    first: {
        type: graphql_1.GraphQLInt,
        defaultValue: 2
    },
    offset: {
        type: graphql_1.GraphQLInt
    }
};
// Represents all of the possible entry points into the GraphQL API
// Resolvers are functions which are called when a field is executed.
exports.QueryRoot = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        domains: {
            type: new graphql_1.GraphQLList(domain_2.domain),
            args: {
                name: {
                    type: graphql_1.GraphQLString
                }, ...paginationArgs
            },
            description: 'Handler to get domains',
            resolve: domain_1.getDomains
        },
        profiles: {
            type: new graphql_1.GraphQLList(profile_1.profile),
            description: 'Handler to get profiles',
            args: {
                name: {
                    type: graphql_1.GraphQLString
                }, ...paginationArgs
            },
            resolve: profiles_1.getProfiles
        },
        ciraconfigs: {
            type: new graphql_1.GraphQLList(profile_1.profile),
            description: 'Handler to get CIRA configs',
            args: {
                name: {
                    type: graphql_1.GraphQLString
                }, ...paginationArgs
            },
            resolve: cira_1.getciraconfigs
        },
    }
});
//# sourceMappingURL=queries.js.map