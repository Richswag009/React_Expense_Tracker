import React, { Component } from 'react'

export default class Search extends Component {
state={
    text:''
};
onChange=(e)=>
    this.setState({[e.target.name]:e.target.value});
    {
    onSubmit =e=>
    e.preventdefault();
    this.props.searchUsers(this.state.text);
    this.setState({text:''})

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} action="" className="form">
                    <input type="text" name='text'
                     placeholder='Search users'
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
}
