import React from 'react'
import '../styles/form.css'

function FormControl() {
    return (
        <div>
            <form className='my-form'>
                <div className='form-group'>
                    <label>To</label>
                    <input type="text" placeholder='A lolly for...' />
                </div>
                <div className='form-group'>
                    <label>Say something nice</label>
                    <textarea />
                </div>
                <div className='form-group'>
                    <label>From</label>
                    <input type="text" placeholder='from your friend...' />
                </div>
                <div className='form-group-btn'>
                    <button>Freeze this lolly and get a link</button>
                </div>
            </form>
        </div>
    )
}

export default FormControl
