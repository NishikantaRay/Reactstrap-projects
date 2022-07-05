import React, { Component } from 'react'

export default class Addcontactlist extends Component {
  state={
    "name":"",
    "email":""
  }
  add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" && this.state.email === ""){
      console.log("name and email is blank");
      return;
    }
    this.props.addContactHandeler(this.state);
    this.setState({name:"",email:""});
    console.log(this.state);
  }
  render() {
    return (
      <><h2>Add Contact</h2>
      <form onSubmit={this.add} >
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={this.setState.name} onChange={(e)=>this.setState({name:e.target.value})} id="exampleFormControlInput1" placeholder="Enter your Name"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={this.setState.email} onChange={(e)=>this.setState({email:e.target.value})} id="exampleFormControlInput2" placeholder="name@example.com"/>
        </div>
        <button className="btn btn-primary" type="submit">ADD</button>
      </form>
      
      </>
    )
  }
}
