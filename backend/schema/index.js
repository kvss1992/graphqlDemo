import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import {resultType} from '../schema/TypeDefs/RootSchema';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      result: {
        type: resultType,
      }
    }
  }) 
})
