import {gql} from '@apollo/client';
// Define mutation
const CREATE_PERSON = gql`
  mutation CreatePerson($personInput: PersonInput!){
    createPerson(input: $personInput) {
      id
      name
      age
      occupation
      salary
      
    }
  }
`;
export default CREATE_PERSON;