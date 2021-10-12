/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducP = /* GraphQL */ `
  query GetProducP($id: ID!) {
    getProducP(id: $id) {
      id
      name
      description
      live
      code
      image
      tecno
      by
      createdAt
      updatedAt
    }
  }
`;
export const listProducPS = /* GraphQL */ `
  query ListProducPS(
    $filter: ModelProducPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        live
        code
        image
        tecno
        by
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
