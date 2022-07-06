import './App.css';
import React ,{useState} from 'react';
import Header from './Header';
import AddContactList from './AddContactList';
import ContactList from './ContactList';
import Link from './Link';

function App() {
  const [contacts,setContacts]=useState([]);
  
  const addContactHandeler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact]);
  }
  console.log(contacts)

  // const [name,setName]=useState("");
  const [flag,setFlag]=useState(false);
  const [steps,setSteps]=useState(0);
  const [names,setNames]=useState([]);
  // const changeName=()=>{
  //   console.log("clicked");
  //   return setName("nishi")
  //   return setFlag(!flag);
  // }
  const increment=()=>{
    setSteps((prevState)=>prevState+1)
    setSteps((prevState)=>prevState+1)
    // return setSteps(steps+1);
  }
  const decrement=()=>{
    return setSteps(steps-1);
  }
  const addNames=(e)=>{
    e.preventDefault();
    setNames([...names,{id:names.length,name:names}])
  }
  return (
    <>
    {/* <Header/>
    <div className="container">
    
    <AddContactList addContactHandeler={addContactHandeler}/>
    <ContactList contacts={contacts}/>
    </div> */}
   
    {/* <Link page={"https://google.com"} children={"hello"}></Link> */}



    {/* <h1>hello{name}</h1>
    <h1>hello{flag? name:""}</h1> */}
    {/* <button onClick={changeName}>click here</button>
    <button onClick={increment}>+</button>
    <h1>{steps}</h1>
    <button onClick={decrement}>+</button> */}

    <form onSubmit={addNames}>
    <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={names} onChange={(e)=>this.setNames(e.target.value)}  placeholder="Enter your Name"/>
          <button type="submit">add</button>
        </div>
    </form>
    </>
  );
}

export default App;
