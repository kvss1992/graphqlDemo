import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';


export const breakingBadType = new GraphQLObjectType({
  name: 'BreakingBadType',
  fields: {
    quote_id: {
      type: GraphQLInt
    },
    quote: {
      type: GraphQLString
    },
    author:{
      type: GraphQLString
    },
    series:{
      type: GraphQLString
    }
  }
})
