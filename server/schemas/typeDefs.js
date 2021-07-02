const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookID: ID
    authors: String
    description: String
    image: String
    title: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(_id:ID!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
