import React from 'react'
import { db } from './firebase'
import { collection, getDocs} from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/rents.css'
import Display from './display'

function Titles() {
    const Database = collection(db,"News")
    const [news,setNews] = useState([])


    useEffect(()=>{
      const getNews = async ()=>{
        const data = await getDocs(Database)
        setNews(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      }
      getNews()
    })

  return (
    <div className='main-box'>
      {
        news.map((data,id)=>(
          <Link to={`/news/${data.id}`}>
              <Display prop={data} id={id}/>
          </Link>
        ))
      }
    </div>
  )
}

export default Titles