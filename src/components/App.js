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
  return (
    <>
    <Header/>
    <div className="container">
    
    <AddContactList addContactHandeler={addContactHandeler}/>
    <ContactList contacts={contacts}/>
    </div>
   
    {/* <Link page={"https://google.com"} children={"hello"}></Link> */}
    </>
  );
}

export default App;
