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
    const Database = collection(db,`Quiz/${id}/questions`)
    const [start,setStart] = useState(true)


    useEffect(()=>{
        const getQuestions = async ()=>{
          const data = await getDocs(Database)
          setQuestions(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        getQuestions()
    })
    const Next = (e)=>{
      e.preventDefault()
      if(ans === questions[num].ans)
      {
        setScore(score+1)
      }
      setNum(num+1)
      const len = questions.length-2
      if(num === len)
      {
        setStart(false)
      }
      const reset = ()=>{
        setAns('')
      }
      reset()
    }

    const SubmitTest = (e)=>{
      e.preventDefault()
      if(ans === questions[num].ans)
      {
        setScore(score+1)
      }
      setTotalscore(true)
    }

  return (
    <div>
        <h1>{questions[num].que}</h1>
        <input 
        value={ans}
        onChange={(res)=>setAns(res.target.value)}
        />
        {start && <button onClick={Next}>NEXT</button>}
        {!start && <button onClick={SubmitTest}>SUBMIT</button>}
        {totalscore && <h1> You got your {score}/{questions.length} answers correct</h1>}
    </div>
  )
}

export default Questions