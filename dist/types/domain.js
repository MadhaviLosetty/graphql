"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainInput = exports.domain = void 0;
const graphql_1 = require("graphql");
exports.domain = new graphql_1.GraphQLObjectType({
    name: 'Domain',
    description: '',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.name
        },
        domainSuffix: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.domain_suffix
        },
        provisioningCert: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.provisioning_cert
        },
        provisioningCertKey: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.provisioning_cert_key
        }
    })
});
exports.domainInput = new graphql_1.GraphQLInputObjectType({
    name: 'Domains',
    fields: {
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        domainSuffix: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        provisioningCert: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        provisioningCertKey: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
    }
});
//# sourceMappingURL=domain.js.map