import React, { useRef } from 'react'
import '../styles/form.css'

function FormControl() {

    const handleSubmit = () => {
        console.log(senderField.current.value)
        console.log(recField.current.value)
        console.log(senderField.current.value)
    }

    const recField = useRef();
    const senderField = useRef();
    const msgField = useRef();

    return (
        <div>
            <form className='my-form'>
                <div className='form-group'>
                    <label>To</label>
                    <input type="text" placeholder='A lolly for...' ref={recField} />
                </div>
                <div className='form-group'>
                    <label>Say something nice</label>
                    <textarea ref={msgField} />
                </div>
                <div className='form-group'>
                    <label>From</label>
                    <input type="text" placeholder='from your friend...' ref={senderField} />
                </div>
                <div className='form-group-btn'>
                    <button type="button" onClick={handleSubmit}>Freeze this lolly and get a link</button>
                </div>
            </form>
        </div>
    )
}

export default FormControl
