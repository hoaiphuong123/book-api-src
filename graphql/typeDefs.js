const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    page: Int!
    genres: [String!]!
    rating: Int!
  }

  type Image {
    id: ID!
    imageUrl: String!
  }

  type Query {
    books: [Book]
    image: [Image] 
  }

  type Mutation {
    addBook(title: String!, author: String!, page: Int!, genres: [String!]!, rating: Int!): Book
    deleteBook(id: ID!): String
    updateBook(id: ID, title: String, author: String, page: Int, genres: [String!], rating: Int): Book
    addImage(imageUrl: String!): Image
    deleteImage(id: ID!): String
  }
`;

module.exports = typeDefs;
