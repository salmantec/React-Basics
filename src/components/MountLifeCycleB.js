import React, { Component } from "react";

class MountLifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "salman"
        }
        console.log("MountLifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("MountLifeCycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("MountLifeCycleB componentDidMount")
    }

    render() {
        console.log("MountLifeCycleB render")
        return (
            <div>
                MountLifeCycleB
            </div>
        )
    }
}

export default MountLifeCycleB