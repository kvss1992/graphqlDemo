import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const dogType = new GraphQLObjectType({
  name: 'DogType',
  fields:{
    message:{
      type: GraphQLString
    },
    status:{
      type: GraphQLString
    }
  }
})
