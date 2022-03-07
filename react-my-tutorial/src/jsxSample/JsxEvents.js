import React from 'react'
// To click the button didnt effect the {name} in the return body. Why? Cuz Didnt refresh.

function JsxEvents() {
    let name = "Güzell"
    const hello = () => {
        name = "Wissen!";
        console.log('Hello JSX events!!');
    }
    return ( 
        <>
        
        {name} 
            {/* <button onClick={hello}>Hello!</button> */}
            <button onClick={() => hello()}>Hello!</button>
        </>
    )
}

export default JsxEvents