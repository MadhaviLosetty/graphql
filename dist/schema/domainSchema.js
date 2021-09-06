"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainType = void 0;
const graphql_1 = require("graphql");
exports.domainType = new graphql_1.GraphQLObjectType({
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
//# sourceMappingURL=domainSchema.js.map