import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    countIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }

    countDecrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1> Count : {this.state.count}</h1>
                <button onClick={() => this.countIncrement()}>Increment</button>
                <button onClick={() => this.countDecrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;