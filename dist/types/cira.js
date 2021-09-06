"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cira = void 0;
const graphql_1 = require("graphql");
exports.cira = new graphql_1.GraphQLObjectType({
    name: 'CIRA',
    description: '',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.cira_config_name
        },
        mpsServerAddress: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.mps_server_address
        },
        mpsPort: {
            type: graphql_1.GraphQLInt,
            resolve: (obj) => obj.mps_port
        },
        userName: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.user_name
        },
        password: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.password
        },
        commonName: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.common_name
        },
        serverAddressFormat: {
            type: graphql_1.GraphQLInt,
            resolve: (obj) => obj.server_address_format
        },
        authMethod: {
            type: graphql_1.GraphQLInt,
            resolve: (obj) => obj.auth_method
        },
        mpsRootCertificate: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.mps_root_certificate
        },
        proxyDetails: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.proxydetails
        }
    })
});
//# sourceMappingURL=cira.js.map