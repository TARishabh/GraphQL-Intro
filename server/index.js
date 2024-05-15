const express = require('express');
const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4');
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');
const { TODOS } = require('./todo');
const { USERS } = require('./user');
// TypeDefs:
// Define the schema
// getTodos is the query name, [Todo] is the return type
// Define the queries (what we can fetch from the server)

// Resolvers:
// Define the resolvers (how to fetch the data)
async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs:`
            type User {
                id: ID!
                name: String!
                username: String!
                email: String!
                phone: String!
                website: String!
            }

            type Todo {
                id: ID!
                title: String!
                completed: Boolean!
                user: User
            }
            type Query {
                getTodos: [Todo]  
                getUsers: [User]
                getUser(id:ID!): User
            }
            `,
        resolvers:{
            Todo: {
                user: (todo) => USERS.find((user) => user.id === todo.userId),
              },
            Query: {
                getTodos: TODOS,
                getUsers: USERS,
                getUser : (parent, {id}) => USERS.find((user)=> user.id === id),
            }
        },
    })
    await server.start();

    app.use(bodyParser.json());
    app.use(cors());
    app.use("/graphql",expressMiddleware(server));
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
}

startServer();