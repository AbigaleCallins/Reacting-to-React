import React from "react";
// receive 2 props will return a header in jsx
const Greeter = props => {
    return (
        <h2>{props.name} {props.phrase}!</h2>
    )
}
export default Greeter;