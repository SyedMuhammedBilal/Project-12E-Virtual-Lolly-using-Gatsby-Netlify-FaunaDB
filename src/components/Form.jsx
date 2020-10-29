import React, { useState } from 'react'
import FormControl from './FormControl';
import Lolly from './Lolly';
import '../styles/home.css';

function Form() {

    const [top, setTop] = useState("#d71d71");
    const [middle, setMiddle] = useState("#f27f2a");
    const [bottom, setBottom] = useState("#f0bc2d");
    return (
        <div className='lolly container'>
            <div className='gift-lolly'>
                <Lolly top={top} middle={middle} bottom={bottom} />
                <div className='flavours'>
                    <div className='picker-label'>
                        <input className='color-picker' type='color' value={ top } onChange={(e) => { setTop(e.target.value) }} />
                    </div>
                    <div className='picker-label'>
                        <input className='color-picker' type='color' value={ middle } onChange={(e) => { setMiddle(e.target.value) }} />
                    </div>
                    <div className='picker-label'>
                        <input className='color-picker' type='color' value={ bottom } onChange={(e) => { setBottom(e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className='info'>
                <FormControl />
            </div>
        </div>
    )
};

export default Form
