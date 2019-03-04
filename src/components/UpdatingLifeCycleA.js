import React, { Component } from "react";
import UpdatingLifeCycleB from "./UpdatingLifeCycleB";

class UpdatingLifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "salman"
        }
        console.log("UpdatingLifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("UpdatingLifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("UpdatingLifeCycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("UpdatingLifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState ) {
        console.log("UpdatingLifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("UpdatingLifeCycleA componentDidUpdate")
    }

    changeState() {
        this.setState({
            name: "mohamed"
        })
    }

    render() {
        console.log("UpdatingLifeCycleA render")
        return (
            <div>
                UpdatingLifeCycleA
                <button onClick={this.changeState}>Change State</button>
                <UpdatingLifeCycleB />
            </div>
        )
    }
}

export default UpdatingLifeCycleA