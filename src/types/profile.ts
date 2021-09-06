import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const profile = new GraphQLObjectType({
    name: 'Profile',
    description: '',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (obj)=> obj.profile_name
        },
        activation: {
            type: GraphQLString,
            resolve: (obj)=> obj.activation
        },
        amtPassword: {
            type: GraphQLString,
            resolve: (obj)=> obj.amt_password
        },
        ciraConfig: {
            type: GraphQLString,
            resolve: (obj)=> obj.cira_config_name
        },
        mebxPassword: {
            type: GraphQLString,
            resolve: (obj)=> obj.mebx_password
        },
        tags: {
            type: GraphQLString,
            resolve: (obj)=> obj.tags
        },
        dhcpEnabled: {
            type: GraphQLBoolean,
            resolve: (obj)=> obj.cira_config_name
        }
    })
})
