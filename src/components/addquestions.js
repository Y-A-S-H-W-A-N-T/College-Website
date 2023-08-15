import React from 'react'
import { db } from './firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function Addquestions({ path }) {
    const [que,setQue] = useState('')
    const [a,setA] = useState('')
    const [b,setB] = useState('')
    const [c,setC] = useState('')
    const [d,setD] = useState('')
    const [ans,setAns] = useState('')
    const Database = collection(db,`Quiz/${path}/questions`)
    // const navigation = useNavigate()
    console.log(Database)

    const AppendQuestion = async()=>{
        if(que==="" || a==="" || b==="" || c==="" || d==="" || ans==="")
        {
            alert("Enter all fields")
            return
        }
        await addDoc(Database, {que: que,A: a,B: b,C: c,D: d,ans: ans})
        .then(()=>{
            alert("Question ADDED")
        })
        .catch(()=>{
            alert("ERROR IN ADDING THE QUESTION")
        })
    }

  return (
    <div>
        <div className='quiz_questions'>
            <input
                type='text'
                placeholder='Que :'
                value={que}
                onChange={(e)=>setQue(e.target.value)}
            /><br/>
            <input
                type='text'
                placeholder='Option A'
                value={a}
                onChange={(e)=>setA(e.target.value)}
            /><br/>
            <input
                type='text'
                placeholder='Option B'
                value={b}
                onChange={(e)=>setB(e.target.value)}
            /><br/>
            <input
                type='text'
                placeholder='Option C'
                value={c}
                onChange={(e)=>setC(e.target.value)}
            /><br/>
            <input
                type='text'
                placeholder='Option D'
                value={d}
                onChange={(e)=>setD(e.target.value)}
            /><br/>
            <input
                type='text'
                placeholder='Answer'
                value={ans}
                onChange={(e)=>setAns(e.target.value)}
            />
            <br/>
        </div>
        <button onClick={AppendQuestion}>ADD QUESTIONS</button>
    </div>
  )
}

export default Addquestions