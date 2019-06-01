const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphQLSchema = require('./backend/schema/index');
const graphQLResolvers = require('./backend/resolvers/index')

const app = express();
app.use(bodyParser.json());

app.use('/graphql',graphqlHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
}));


// mongoose.connect('mongodb://localhost:27017/HealthRecorder', {useNewUrlParser: true});
const db = 'mongodb://localhost:27017/HealthRecorder'
//const db = 'mongodb+srv://aaronChan:'+process.env.MONGO_ATLAS_PW+'@healthrecorder-udexy.mongodb.net/test?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.listen(3000);