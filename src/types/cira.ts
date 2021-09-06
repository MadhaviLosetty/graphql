import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const cira = new GraphQLObjectType({
    name: 'CIRA',
    description: '',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (obj)=> obj.cira_config_name
        },
        mpsServerAddress: {
            type: GraphQLString,
            resolve: (obj)=> obj.mps_server_address
        },
        mpsPort: {
            type: GraphQLInt,
            resolve: (obj)=> obj.mps_port
        },
        userName: {
            type: GraphQLString,
            resolve: (obj)=> obj.user_name
        },
        password: {
            type: GraphQLString,
            resolve: (obj)=> obj.password
        },
        commonName: {
            type: GraphQLString,
            resolve: (obj)=> obj.common_name
        },
        serverAddressFormat: {
            type: GraphQLInt,
            resolve: (obj)=> obj.server_address_format
        },
        authMethod: {
            type: GraphQLInt,
            resolve: (obj)=> obj.auth_method
        },
        mpsRootCertificate: {
            type: GraphQLString,
            resolve: (obj)=> obj.mps_root_certificate
        },
        proxyDetails: {
            type: GraphQLString,
            resolve: (obj)=> obj.proxydetails
        }
    })
})

  
  