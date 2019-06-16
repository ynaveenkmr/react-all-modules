import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentValue : 'parent'
        }
        this.parentFun = this.parentFun.bind(this)
    }
    parentFun(){
        alert(`Hello ${this.state.parentValue}`)
    }
    
    render() {
        return (
            <div>
             <ChildComponent parentRf={this.parentFun}/>   
            </div>
        )
    }
}

export default ParentComponent
