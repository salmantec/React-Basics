import React from "react";

class ClassClick extends React.Component {

    buttonClickEvent() {
        console.log("Button Was Clicked");
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonClickEvent}>Click</button>
            </div>
        )
    }
}

export default ClassClick; 