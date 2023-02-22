import { ReactElement, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")

  return (
    <div className="App">
      <InputComp setName={setName}/>
      <OutPutComp name={name}/>
      <PeopleViewer/>
    </div>
    
  )
}




function InputComp(props: {setName: React.Dispatch<React.SetStateAction<string>>}): ReactElement {

  return (
  <div>
    <input placeholder='write name' onChange={evt => props.setName(evt.target.value)} className='input'></input>
  </div>
  )

}

function OutPutComp(props: {name: string}): ReactElement {
  return(
    <div className='textName'>
        {props.name}
      </div>

  )

}

function PeopleViewer(): ReactElement {
  const [people, setPeople] = useState([]);

  type Person = {
    name: string, 
    age: number,
    city: string

  }

  useEffect(() => {
    fetch("http://localhost:3008/person")
    .then((res) => res.json())
    .then((res) => setPeople(res))

  }, []
  );


  return(
    <div>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          </tr>
        </thead>

        <tbody>
          {people.map(
            (person: Person) => 
            <tr>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>


            </tr>
            
          )}

        </tbody>
      </table>

      <AddPerson/>

    </div>

  )
}

function AddPerson(): ReactElement {
  
  
  return(
    <div>
        <button onClick={}>Add person</button>

    </div>

  )


}


export default App
