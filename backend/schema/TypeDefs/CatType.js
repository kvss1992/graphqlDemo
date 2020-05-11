import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';


export const StatusType = new GraphQLObjectType({
  name: "statusType",
  fields: () => ({
    verified: {
      type:GraphQLBoolean
    },
    sentCount:{
      type: GraphQLInt
    }
  })
});


export const catType = new GraphQLObjectType({
  name: "CatType",
  fields: {
    used: {
      type:GraphQLBoolean
    },
    source: {
      type: GraphQLString
    },
    type:{
      type: GraphQLString
    },
    deleted:{
      type: GraphQLBoolean
    },
    text:{
      type: GraphQLString
    },
    updatedAt:{
      type: GraphQLString
    },
    createdAt:{
      type: GraphQLString
    },
    user:{
      type: GraphQLString
    },
    status:{
      type: StatusType
    }
  }
})
