import React, { useState } from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState('')

    const handleTextChange = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
        getQuery(event.target.value)
    }

    return (
        <div className="container content-between">
            <div className="form-control p-5">
                <label className="input-group">
                    <span className="p-2" >Character</span>
                    <input
                    className="input input-bordered" 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder="Search character names..." 
                    value={text} autoFocus
                    />
                </label>
            </div>
        </div>
    )
}

export default Search
