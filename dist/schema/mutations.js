"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationRoot = void 0;
const domain_1 = require("../types/domain");
const graphql_1 = require("graphql");
const domain_2 = require("../resolvers/domain");
const profiles_1 = require("../resolvers/profiles");
const profile_1 = require("../types/profile");
exports.MutationRoot = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createDomain: {
            type: domain_1.domain,
            description: 'Handler to create domain',
            args: {
                domainInput: {
                    type: domain_1.domainInput
                }
            },
            resolve: domain_2.createDomain
        },
        deleteDomain: {
            type: domain_1.domain,
            description: 'Handler to delete domain',
            args: {
                name: { type: graphql_1.GraphQLString }
            },
            resolve: domain_2.deleteDomain
        },
        createProfile: {
            type: profile_1.profile,
            description: 'Handler to add a profile',
            args: {
                name: { type: graphql_1.GraphQLString },
                activation: { type: graphql_1.GraphQLString },
                amtPassword: { type: graphql_1.GraphQLString },
                ciraConfig: { type: graphql_1.GraphQLString },
                mebxPassword: { type: graphql_1.GraphQLString },
                tags: { type: graphql_1.GraphQLString },
                dhcpEnabled: { type: graphql_1.GraphQLBoolean }
            },
            resolve: profiles_1.createProfile
        },
        deleteProfile: {
            type: profile_1.profile,
            description: 'Handler to delete profile',
            args: {
                name: { type: graphql_1.GraphQLString }
            },
            resolve: profiles_1.deleteProfile
        }
    }
});
//# sourceMappingURL=mutations.js.map