import React from 'react'
import spinner from '../../img/spinner.gif'

function Spinner() {
    return (
        <img src={spinner} style={{ width: '100px', margin: 'auto', display: 'block'}} alt="loading..."/>
    )
}

export default Spinner
