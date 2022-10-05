import React, { Component } from 'react'

export default function Search() {
state={
    text:''
}
onChange = e => this.setState({[e.target.name]:e.target.value});

onSubmit = e =>{
    e.preventdefault();
    this.props.SearchUsers(this.state.text);
    this.setState({text:''}) 
}

        return (
            <div>
                <form onSubmit={this.onSubmit} action=""method='Get' className="form">
                    <input type="text" name='text'
                     placeholder='Search users....'
                     value={this.state.text}
                     onChange={this.onChange}  />
                    <input type="submit"
                     value="Search"
                     className="btn btn-dark btn-block"
                     />
                </form>
            </div>
        )
    
}
