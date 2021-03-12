import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query {
    getCategories
  }
`;

const GET_JOKE = gql`
  query getJoke($category: String) {
    getJoke(category: $category)
  }
`;

export { GET_CATEGORIES, GET_JOKE };
