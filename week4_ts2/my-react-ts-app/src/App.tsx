import { ReactElement, ReactEventHandler, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let URL: string = "http://localhost:3008/person";

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

function makeOptions(method: string, body?: JSON ) {
  method = method ? method : 'GET';
  const opts = {
      method: method,
      headers: {
          ...(['PUT', 'POST'].includes(method) && {
              "Content-type": "application/json"
          }),
          "Accept": "application/json"
      },

      body: ""
  }

  if (body) {
    opts.body = JSON.stringify(body);
  }
  
  return opts;
}

function PeopleViewer(): ReactElement {
  const [people, setPeople] = useState([]);

  type Person = {
    id: number,
    name: string, 
    age: number,
    city: string

  }


  const[update, setUpdate] = useState({});
  //JSON server endpoints are premade, link/person GET, link/person POST, link/person/id PUT, link/person/id DELETE
  useEffect(() => {
    const options = makeOptions("GET");
    fetch(URL)
    .then((res) => res.json())
    .then((res) => setPeople(res))

  }, [update]
  );


  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {people.map(
            (person: Person) => 
            <tr>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
              <DeletePerson update={update} setUpdate={setUpdate} id={person.id}/>

            </tr>
            
          )}

        </tbody>
      </table>

      <AddPerson update={update} setUpdate={setUpdate}/>
      <UpdatePerson update={update} setUpdate={setUpdate}/>
    </div>

  )
}

function AddPerson(props: {update:{}, setUpdate:React.Dispatch<React.SetStateAction<{}>>}): ReactElement {
  const[person, setPerson] = useState({});

  const onChange = (evt: any) => {
    setPerson({...person, [evt.target.id]: evt.target.value})
  }

  const submit = () => {
    const options = makeOptions("POST", person);
    fetch(URL, options).then(() =>
    props.setUpdate(!props.update));
} 


  return(
    <div>
        <h2 className="h2title">Add Person</h2>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Name</span>
                </div>
                <input type="text" id="name" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Age</span>
                </div>
                <input type="text" id="age" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >City</span>
                </div>
                <input type="text" id="city" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
        </div>

        <button onClick={submit}>Add person</button>

    </div>

  )


}

function DeletePerson(props: {update:{}, setUpdate:React.Dispatch<React.SetStateAction<{}>>, id:number}): ReactElement {

  const submit = () => {
    const options = makeOptions("DELETE");
    fetch(URL + "/" + props.id, options).then(() =>
    props.setUpdate(!props.update));
} 


  return(
    <div>

        <button onClick={submit}>Delete person</button>

    </div>

  )


}

function UpdatePerson(props: {update:{}, setUpdate:React.Dispatch<React.SetStateAction<{}>>}): ReactElement {
  const [person, setPerson] = useState({
    id: Number, 
    name: String, 
    age: Number, 
    city: String
  });
  const [id, setID] = useState({});

  const onChange = (evt:any) => {
    setPerson({...person, [evt.target.id]: evt.target.value})
}

  const submit = () => {
    const options = makeOptions("PUT", person);
    fetch(URL + "/" + person.id, options).then(() =>
    props.setUpdate(!props.update));
} 


  return(
    <div>
        <h2 className="h2title">Update Person</h2>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >ID</span>
                </div>
                <input type="text" id="id" className="form-control input_field" aria-label="Name"
                      onChange={onChange}
                      aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Name</span>
                </div>
                <input type="text" id="name" className="form-control input_field" aria-label="Name"
                      onChange={onChange}
                      aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Age</span>
                </div>
                <input type="text" id="age" className="form-control input_field" aria-label="Name"
                      onChange={onChange}
                      aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >City</span>
                </div>
                <input type="text" id="city" className="form-control input_field" aria-label="Name"
                      onChange={onChange}
                      aria-describedby="basic-addon1"/>
        </div>
      

        <button onClick={submit}>Update person</button>

    </div>

  )


}




export default App
