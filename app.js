const express = require('express')
const graphqlHTTP = require('express-graphql')
const schemas = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

//allow cross-origin requests
app.use(cors())

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema: schemas,
    graphiql: true
}));

app.listen(process.env.PORT || 8080);