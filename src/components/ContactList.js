import React from 'react'
import ContactCard from './ContactCard';
export default function Contactlist(props) {
  console.log(props.contacts);
  const contactrenderlist=props.contacts.map((contact,i)=>{
    
        return(
            <ContactCard contact={contact} key={i}/>
        )
  });
    return (
    <div><h2>Contact List</h2>
    {contactrenderlist}
    </div>
  )
}
