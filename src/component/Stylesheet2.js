import React from 'react'
import './myStyles.css'

function Stylesheet2(props) {
    let className_var = props.primary?'primary':'secondary'
    return (
        <div>
            <h2 className={className_var}>Another Stylesheet managed from props</h2>
            <h2 className={`${className_var} font_class`}>Another Stylesheet managed from props and using multiple classes</h2>
        </div>
    )
}

export default Stylesheet2
