import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           <button onClick={props.parentRf}>Child button</button> 
        </div>
    )
}
export default ChildComponent
