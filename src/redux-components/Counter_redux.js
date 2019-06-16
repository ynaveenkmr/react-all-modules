import React from 'react'
import { connect } from 'react-redux'


function Counter_redux(props) {
    return (
        <div>
            <h2>Counter : {props.count}</h2>
            <button >Click</button>
            
        </div>
    )
}
function mapStateToProps(state){
    console.log('mapStateToProps', state)
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter_redux)
