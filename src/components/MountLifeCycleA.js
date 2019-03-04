import React, { Component } from "react";
import MountLifeCycleB from "./MountLifeCycleB";

class MountLifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "salman"
        }
        console.log("MountLifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("MountLifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("MountLifeCycleA componentDidMount")
    }

    render() {
        console.log("MountLifeCycleA render")
        return (
            <div>
                MountLifeCycleA
                <MountLifeCycleB />
            </div>
        )
    }
}

export default MountLifeCycleA