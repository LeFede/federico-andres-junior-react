import { gql } from "@apollo/client"
import client from "./client";

export const getAllCategories = async () => {
  const query = gql`
    query {
      categories {
        name
      }
    }
  `
    const res = await client.query({ query })
    return res
}

export const getProduct = async (id) => {
  const query = gql`
    query product($id: String!) {
      product(id: $id) {
        name
      }
    }
  `

  const variables = {id}

  const res = await client.query({query, variables})
  return res

}