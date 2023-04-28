import { gql } from '@apollo/client';
export default {
    query: gql`
      query GetPeople {
        people{
          id
          name
          age
          occupation
          salary
        }
      }
    `,
  }