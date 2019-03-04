import React, { Component } from "react";

class UpdatingLifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "salman"
        }
        console.log("UpdatingLifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("UpdatingLifeCycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("UpdatingLifeCycleB componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("UpdatingLifeCycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState ) {
        console.log("UpdatingLifeCycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("UpdatingLifeCycleB componentDidUpdate")
    }


    render() {
        console.log("UpdatingLifeCycleB render")
        return (
            <div>
                UpdatingLifeCycleB
            </div>
        )
    }
}

export default UpdatingLifeCycleB