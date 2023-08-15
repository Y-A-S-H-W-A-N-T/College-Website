import React from 'react'
import { db } from './firebase'
import { doc, setDoc } from '@firebase/firestore'
import { useState } from 'react'
import Addquestions from './addquestions'

function AddTest() {
    const [test,setTest] = useState('')

    const [flag,setFlag] = useState(false)
    const handleAddTest = async(e)=>{
        e.preventDefault()
        if(test==="")
        {
            alert("Enter Details")
            return
        }
        else
        {
            const Database = doc(db,"Quiz",`${test}`)
            await setDoc(Database, {
                subject: test
            })
            .then(()=>{
                alert("ADDED")
                setFlag(true)
            })
            .catch(()=>{
                alert("ERROR IN ADDING THE TEST")
            })
        }
    }
  return (
    <div>
        {
            !flag &&
            <input
            type='text'
            value={test}
            placeholder='Test Name'
            onChange={(e)=>setTest(e.target.value)}
            />
        }
        {flag && <h1>{test}</h1>}
        <br/><br/><br/>
        {flag && <Addquestions path={test}/>}
        {!flag && <button onClick={handleAddTest}>ADD</button>}
    </div>
  )
}

export default AddTest