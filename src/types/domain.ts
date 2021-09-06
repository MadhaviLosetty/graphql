import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const domain = new GraphQLObjectType({
    name: 'Domain',
    description: '',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (obj) => obj.name
        },
        domainSuffix: {
            type: GraphQLString,
            resolve: (obj) => obj.domain_suffix
        },
        provisioningCert: {
            type: GraphQLString,
            resolve: (obj) => obj.provisioning_cert
        },
        provisioningCertKey: {
            type: GraphQLString,
            resolve: (obj) => obj.provisioning_cert_key
        }
    })
})


export const domainInput = new GraphQLInputObjectType({
    name: 'Domains',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        domainSuffix: { type: new GraphQLNonNull(GraphQLString) },
        provisioningCert: { type: new GraphQLNonNull(GraphQLString) },
        provisioningCertKey: { type: new GraphQLNonNull(GraphQLString) }
    }
})