# GraphQL 
An API query language created by Facebook in 2012, which is an open sourced in 2015.

### Why GraphQL?
1. Avoids over fetching of data - performance considerations and transfer speeds. 
2. under fetching - Dashboards, summary views needs data from multiple resources. With GraphQL single query, data can be pulled from multiple resources in one single request. Ease front end development.
3. Complicated updates
		a. State changes 
		b. Updates to multiple resources
		c. Autosaving

### Explore a GraphQL API 
[GitHub Docs](https://docs.github.com/en/graphql/overview/explorer)

### How GraphQL is different from REST API
1. GraphQL has only one single end point unlike REST API's, where we can have different end points for CURD operations with respective REST methods.
2. GraphQL cannot provide HTTP errors, need to re-write error handling.
3. GraphQL is strongly typed
4. versioning is different and smooth. Can easily deprecate and add columns with middleware's.

|RESTful API| GraphQL  |
|---------- |----------|
|Multiple end points for CURD operations with respective to REST methods i.e. GET,POST,PUT,PATCH and DELETE |GraphQL has only one single end point |
|Always returns fixed set of data  | User can select the data and avoids over fetching of data |
| It cannot be done dynamically like GraphQL | With GraphQL single query, data can be pulled from multiple resources in one single request.  |


## Features of GraphQL

 1. Queries : Get some data 
 2. Mutation : Update some data
 3. Directives: Modify query (example : skip/include fields)
 4. Introspection: Get the schema

### Query a GraphQL schema
REST equivalent : GET 

 - Arguments


### Change data with GraphQL mutations
REST equivalent: POST, PUT, DELETE

 - Type Validation
 - Return query

 
## Building a GraphQL Server
 - Setup project and GraphQL
 - Define the endpoints that the server listens to
 - Create a schema : To determine what queries and mutations are available to users
	 - Define queries(GET)
	 - Add filters
	 - Add pagination
	 - Define mutations (POST, PUT, DELETE)
 - Set up authentication 
 