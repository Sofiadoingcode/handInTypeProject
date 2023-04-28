import { useState } from 'react';
import CREATE_PERSON from '../queries/CreatePerson';
import GetAllPeople from '../queries/GetAllPeople';
import { gql, useMutation } from '@apollo/client';

export default () => {
    const [person, setPerson] = useState({
        name: "",
        age: "",
        occupation: "",
        salary: "",
    });


    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_PERSON,{
        refetchQueries: [GetAllPeople]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const handleChange = (evt: any) => {
        setPerson({...person, [evt.target.id]: evt.target.value})
      }

      
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { personInput: person }}); 

      }


    return (
        <div>
            <h3>Create Person</h3>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" 
                     name="name" 
                     value={person.name || ""} 
                     onChange={handleChange}
                    />
                
                </label>
                <label>Age:
                    <input type="text" 
                     name="age" 
                     value={person.age || ""} 
                     onChange={handleChange}
                    />
                    
                </label>
                <label>Occupation:
                    <input type="text" 
                     name="occupation" 
                     value={person.occupation || ""} 
                     onChange={handleChange}
                    />
                </label>
                <label>Salary:
                    <input type="text" 
                     name="salary" 
                     value={person.salary || ""} 
                     onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Create Person" />
            </form>
        </div>)
}