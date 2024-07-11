const express = require('express')
const {ApolloServer,gql} = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const userApiFromRouter = require('./routes/usersRoute')
const cors = require('cors')
const app = express();  
const port=3001;

app.use(express.json());
app.use(cors()) //using cors
const url = 'mongodb+srv://rashanishath:xF9HdOUVyPQizGxf@cluster0.kcnltqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



//connecting my express app to my mongodb server
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{}).catch((err)=>{})
    //{console.log('Mongo DB connected')}).catch((err)=>console.log(err));

//start my apollo express server
const server = new ApolloServer({typeDefs,resolvers});

app.use('/users',userApiFromRouter);

async function StartServer() {
    await server.start();  //wait and don't return anything until my server starts
    server.applyMiddleware({app});  //run my express code(express app)
    app.listen(port,()=> {
        console.log('Server live');
    })
}

function add(a,b){
    return a+b;
}
StartServer();

module.exports = add;
module.exports = app;
/*
const express = require('express');
const mongoose = require('mongoose')
const {ApolloServer,gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors')//import cors
const userApiFromRouter = 
require('./routes/userRoutes') //import
const app = express() 
const port = 3001;
const url= 'mongodb+srv://rashanishath:xF9HdOUVyPQizGxf@cluster0.kcnltqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json())
app.use(cors()) //using cors
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{})
.catch((err)=>{})

const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);//add router

async function StartServer(){
   await server.start();
   server.applyMiddleware({app});
   const httpServer= app.listen(port,()=>{
    console.log('Server Live 3001');
   })
   return httpServer;
}


module.exports={app,StartServer};*/