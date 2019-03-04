import React from "react";

const FunctionClick = () => {
    const buttonClicked = () => {
        console.log("button was clicked");
    }

    return (
        <div>
            <button onClick={buttonClicked}>Click</button>
        </div>
    )
}

export default FunctionClick;