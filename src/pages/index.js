import React, { useRef, useState } from "react"
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Form from "../components/Form"
import Lolly from "../components/Lolly"
import Header from "../components/Header";
import '../styles/form.css'
import '../styles/home.css';

const getAllData = gql`
  {
    getVCard {
      id,
      c1,
      c2,
      c3,
      link,
      rec,
      sender,
      msg
    }
  }
`

const addVCard = gql`
  mutation adVCard(
    $c1: String!
    $c2: String!
    $c3: String!
    $rec: String!
    $sender: String!
    $msg: String!
  ) {
    addVCard(
      c1: $c1  
      c2: $c2
      c3: $c3
      rec: $rec
      sender: $sender
      msg: $msg
    ) {
      id
    }
  }
`


export default function Home() {

  const [top, setTop] = useState("#d71d71");
  const [middle, setMiddle] = useState("#f27f2a");
  const [bottom, setBottom] = useState("#f0bc2d");
  
  const [addVcard] = useMutation(addVCard);

  const recField = useRef();
  const senderField = useRef();
  const msgField = useRef();

  const handleSubmit = () => {
    console.log(senderField.current.value)
    console.log(recField.current.value)
    console.log(msgField.current.value)
    addVcard({
      variables: {
        c1: top,
        c2: middle,
        c3: bottom,
        rec: recField.current.value,
        sender: senderField.current.value,
        msg: msgField.current.value
      },
      refetchQueries: [{ query: getAllData }]
    })
    
}

  const { loading, error, data } = useQuery(getAllData);

  if(loading)
    return <h2>Loading...</h2>
  if(error) 
    return <h2>Error...</h2>
  
  return (
    <React.Fragment>
    <p style={{color: 'white'}}>{JSON.stringify(data.getVCard)}</p>
    <Header />
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
      </div>
    </React.Fragment>
  )
};
