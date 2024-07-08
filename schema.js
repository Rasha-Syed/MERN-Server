//create a schema using GQL
//server>schema.js
//create a schema using GQL
const {gql} = require('apollo-server-express');
const tyeDefs = gql`
type User {
    id:ID !,
    name:String !,
    email:String !,
    password:String !
}
type Query {
    getUser(id:ID!):User
    getUsers:[User]
    searchUsers(name:String!):[User]
    getLimitedUsers(limit:Int!,offset:Int!):[User]
    login(email: String!, password: String!): User
}
input createUserInput{
    name:String!,
    email:String!,
    password:String!
}
input updateUserInput{
    name:String!,
    email:String!,
    password:String!
}
type Mutation{
    createUser(input:createUserInput!):User
    changePass(id:ID!,password:String!):User
    updateUser(id:ID!,input:updateUserInput):User
    deleteUser(id:ID!):User
}
`;
module.exports=tyeDefs; //export out