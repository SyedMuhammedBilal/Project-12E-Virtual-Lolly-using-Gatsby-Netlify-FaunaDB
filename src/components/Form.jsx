import React, { useState } from 'react'
import FormControl from './FormControl';
import Lolly from './Lolly';
import '../styles/home.css'

function Form() {

    const [top, setTop] = useState();
    const [middle, setMiddle] = useState();
    const [bottom, setBottom] = useState();
    return (
        <div className='container'>
            <div>
                <Lolly top={top} middle={middle} bottom={bottom} />
                <input type='color' value={ top } onChange={(e) => { setTop(e.target.value) }} />
                <input type='color' value={ middle } onChange={(e) => { setMiddle(e.target.value) }} />
                <input type='color' value={ bottom } onChange={(e) => { setBottom(e.target.value) }} />
            </div>
            <FormControl />
        </div>
    )
};

export default Form
