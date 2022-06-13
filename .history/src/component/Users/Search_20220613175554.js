import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <form action="" className="form">
                    <input type="text" name='text' placeholder='Search users' />
                </form>
            </div>
        )
    }
}
