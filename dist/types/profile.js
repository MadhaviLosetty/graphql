"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
const graphql_1 = require("graphql");
exports.profile = new graphql_1.GraphQLObjectType({
    name: 'Profile',
    description: '',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.profile_name
        },
        activation: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.activation
        },
        amtPassword: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.amt_password
        },
        ciraConfig: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.cira_config_name
        },
        mebxPassword: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.mebx_password
        },
        tags: {
            type: graphql_1.GraphQLString,
            resolve: (obj) => obj.tags
        },
        dhcpEnabled: {
            type: graphql_1.GraphQLBoolean,
            resolve: (obj) => obj.cira_config_name
        }
    })
});
//# sourceMappingURL=profile.js.map