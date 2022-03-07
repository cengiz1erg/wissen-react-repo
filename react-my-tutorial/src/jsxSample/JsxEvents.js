import React from 'react'

function JsxEvents() {

    const hello = () => {
        console.log('Hello JSX events!!');
    }


    const hola = () => {return "merhaba dünya!!"};

    return (
        <>
            {/* <button onClick={hello}>Hello!</button> */}
            <button onClick={() => hello()}>Hello!</button>
        </>
    )
}

export default JsxEvents