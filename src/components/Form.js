import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            comment: "",
            topic: "react"
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    
    handlerCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    
    handlerTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.userName} onChange={this.handlerUsernameChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handlerCommentChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <select value={this.state.topic} onChange={this.handlerTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;