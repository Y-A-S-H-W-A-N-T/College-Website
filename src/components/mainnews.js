import React from 'react'
import { db } from './firebase'
import { useState, useEffect } from 'react'
import { getDoc, doc} from '@firebase/firestore'
import './css/display.css'
import { useParams } from 'react-router-dom'

function MainNews() {
    const id = useParams()
    const [news,setNews] = useState('')

    // Fetching Rent Location | Price | Rooms
    const doc_ref = doc(db,"News",id.id)
    useEffect(()=>{
        getDoc(doc_ref).then((res)=>{
            setNews(res.data())
        })
    },[doc_ref])

  return (
    <div className='images'> 
        <h1>VTU : {news.Vtu}</h1>
        <h1>TITLE : {news.Title}</h1>
        <h1>NEWS : {news.News}</h1>
        <img src={news.url_link} alt='News_Image'/>
    </div>
  )
}

export default MainNews