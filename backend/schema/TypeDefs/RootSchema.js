import { GraphQLObjectType } from 'graphql';

import {breakingBadType} from './BreakingBadTypes';
import {dogType} from './DogTypes';
import {catType} from './CatType';

export const resultType = new GraphQLObjectType({
  name: 'resultType',
  fields: {
    breaking_bad: {
      type: breakingBadType
    },
    dog: {
      type: dogType
    },
    cat: {
      type: catType
    }
  }
})