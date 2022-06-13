import React, { Component } from 'react'

export default class Search extends Component {
state={
    text:''
};
onChange=(e)=>{
    this.setState({text:e.target.value})
}
    render() {
        return (
            <div>
                <form action="" className="form">
                    <input type="text" name='text'
                     placeholder='Search users'
                     value={this.state.text} />
                    <input type="submit"
                     value="Search"
                     className="btn btn-dark btn-block"
                     onChange={this.onChange} />
                </form>
            </div>
        )
    }
}
