import { domain, domainInput } from '../types/domain';
import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql'
import { createDomain, deleteDomain } from '../resolvers/domain'
import { createProfile, deleteProfile } from '../resolvers/profiles';
import { profile } from '../types/profile';

export const MutationRoot = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createDomain: {
            type: domain,
            description: 'Handler to create domain',
            args: {
                domainInput : {
                    type: domainInput
                }
            },
            resolve: createDomain
        },
        deleteDomain: {
            type: domain,
            description: 'Handler to delete domain',
            args: {
                name: { type: GraphQLString }
            },
            resolve: deleteDomain
        },
        createProfile: {
            type: profile,
            description: 'Handler to add a profile',
            args: {
                name: { type: GraphQLString },
                activation: { type: GraphQLString },
                amtPassword: { type: GraphQLString },
                ciraConfig: { type: GraphQLString },
                mebxPassword: { type: GraphQLString },
                tags: { type: GraphQLString },
                dhcpEnabled: { type: GraphQLBoolean }
            },
            resolve: createProfile
        },
        deleteProfile: {
            type: profile,
            description: 'Handler to delete profile',
            args: {
                name: { type: GraphQLString }
            },
            resolve: deleteProfile
        }
    }
})