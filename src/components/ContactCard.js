import React from 'react'
import user from '../images/user.webp';
export default function ContactCard(props) {
    const{name,email}=props.contact;
  return (
    <div>
        <div className="row">
               <div className="col-md-1 col-1">
                <img src={user} alt=""  style={{width:"20px",borderRadius:"50px"}} />
               </div>
               <div className="col-md-5 col-3">{name}</div>
               <div className="col-md-3 col-3">{email}</div>
               <div className="col-md-3 col-3"> <button className="btn btn-danger" type="submit">Delete</button></div>

            </div>
    </div>
  )
}
