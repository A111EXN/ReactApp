import React, { Component } from 'react'

export default class Header extends Component {

  constructor(){
    super()
    this.state = {
      username: "Bobby Chan",
      image_url:"https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  }

   changeUser=()=>{
     this.setState({
        username: "Alex Ngan",
        image_url: "https://images.unsplash.com/photo-1613238386163-403e73e8a8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
     })
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-profile">
          <p>{this.state.username}</p>
          <img className="profile-img" src={this.state.image_url}/>
        </div>
        <button onClick={this.changeUser}>Change user</button>
      </div>
    )
  }
}