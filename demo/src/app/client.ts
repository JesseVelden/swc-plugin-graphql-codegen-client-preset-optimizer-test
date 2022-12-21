import {graphql} from '../gql';

const GetCartByIdDocument = graphql(/* GraphQL */ `
  query GetCartByIdAA($id: ID!) {
    cart(id: $id) {
        id
        items {
            id
            name
        }
        totalItems
    }
  }
`);