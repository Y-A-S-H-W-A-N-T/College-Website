import React from 'react'
import { db } from './firebase'
import { collection, getDocs} from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Questions() {

    const { id } = useParams()
    
    const [ans,setAns] = useState('')
    const [num,setNum] = useState(0)
    const [score,setScore] = useState(0)
    const [totalscore,setTotalscore] = useState(false)
    const [questions,setQuestions] = useState([{}])
    const [submit,setSubmit] = useState(false)
    const [end,setEnd] = useState(false)
    const Database = collection(db,`Quiz/${id}/questions`)
    //fetching the questions
    useEffect(()=>{
        const getQuestions = async ()=>{
          const data = await getDocs(Database)
          setQuestions(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        getQuestions()
        if(num+2 === questions.length)
        {
          setSubmit(false)
        }
        else
        {
          setSubmit(true)
        }
    },[setSubmit,Database,questions.length,num])

    // To move next question
    const Next = (e)=>{
      e.preventDefault()
      if(ans === questions[num].ans)
      {
        setScore(score+1)
      }
      setNum(num+1)
      if(num === questions.length)
      {
        setSubmit(false)
      }
    }

    // submit test

    const SubmitTest = (e)=>{
      e.preventDefault()
      if(ans === questions[num].ans)
      {
        setScore(score+1)
      }
      setTotalscore(true)
      setEnd(true)
    }

  return (
    <div>
        <h1>{questions[num].que}</h1>
        <br></br>
        <input type="radio" value={questions[num].A} name="gender" onChange={(res)=>setAns(res.target.value)}/>{questions[num].A}
        <br></br>
        <input type="radio" value={questions[num].B} name="gender" onChange={(res)=>setAns(res.target.value)}/>{questions[num].B}
        <br></br>
        <input type="radio" value={questions[num].C} name="gender" onChange={(res)=>setAns(res.target.value)}/>{questions[num].C}
        <br></br>
        <input type="radio" value={questions[num].D} name="gender" onChange={(res)=>setAns(res.target.value)}/>{questions[num].D}
        <br></br>

        <br></br>
        {!submit && <button onClick={Next}>NEXT</button>}

        {submit && !end && <button onClick={SubmitTest}>SUBMIT</button>}

        {totalscore && <h1> You got your {score}/{questions.length} answers correct</h1>}
    </div>
  )
}

export default Questions