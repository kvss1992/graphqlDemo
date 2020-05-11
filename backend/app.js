import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';

//  GraphQL Imports
import {schema} from './schema/index';
import {rootResolver} from './resolvers/index';
import {callAllEndPointsFn} from './service/restApi';

//  Initialize dotenv
dotenv.config();

//  Initialize Express as app.
const app = express();

const port = process.env.PORT;

//  Cors (for local Dev. Not needed in Prod)
app.use(cors());

//  GraphQL EndPoint
app.use('/graphql',  graphqlHTTP({
  schema: schema,
  rootValue: rootResolver,
  graphiql: true,
}));

//  Rest API EndPoint
app.get('/all', async (req, res) => {
  const response = await callAllEndPointsFn();
  res.send(response);
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))