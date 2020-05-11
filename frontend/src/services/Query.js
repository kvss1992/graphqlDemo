import { gql } from "apollo-boost";

export const ENDPOINT_QUERY = gql`{
  result {
    breaking_bad {
      quote
    }
    dog {
      message
    }
    cat {
      text
    }
  }
}
`