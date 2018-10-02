const express = require('express')
const graphqlHTTP = require('express-graphql')
const schemas = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

//allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://dash:dash123@ds261040.mlab.com:61040/gql-ninja',{ useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema: schemas,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for request on port 4000');
})