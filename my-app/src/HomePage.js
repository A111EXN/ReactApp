import React, { Component } from 'react'
import Profile from './Profile'

export default class HomePage extends Component {

constructor(){
 super()
 this.state={
    title:"Quotes",
    url_one:"https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    url_two:"https://images.unsplash.com/photo-1613238386163-403e73e8a8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGpkbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    quote_one:"",
    quote_two:""

 }


}

changeTitle=()=>{
    this.setState({
        title:"My Quote"
    })
}


componentDidMount(){
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(res=>res.json())
    .then(response=>{
        console.log(response.data[0].quoteText)
        this.setState({
            quote_one:response.data[0].quoteText,
            quote_two:response.data[7].quoteText
        })



    })
    .catch (err=>console.log(err))
}


  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Profile image={this.state.url_one} 
        title={this.state.title} 
        changeTitle={this.changeTitle}
        quote={this.state.quote_one}
        />

        <Profile image={this.state.url_two} 
        title={this.state.title}
        changeTitle={this.changeTitle}
        quote={this.state.quote_two}
        />
      </div>
    )
  }
}
