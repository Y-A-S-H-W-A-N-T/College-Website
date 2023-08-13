import React from 'react'
import { db } from './firebase'
import { collection, getDocs} from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Quiz() {

    const Database = collection(db,"Quiz")
    const [quiz,setQuiz] = useState([])

    useEffect(()=>{
      const getQuiz = async ()=>{
        const data = await getDocs(Database)
        setQuiz(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      }
      getQuiz()
    })  


  return (
    <div>
        {   
            quiz.map((test,id)=>(
              <Link to={`/questions/${test.id}`}>
                <div key={id}>
                    {test.subject}
                </div>
              </Link>
            ))
        }
    </div>
  )
}

export default Quiz