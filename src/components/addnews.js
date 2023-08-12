import React from 'react'
import { db, storage } from './firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"

function AddNews() {
    const [vtu,setVtu] = useState('')
    const [title,setTitle] = useState('')
    const [news,setNews] = useState('')
    const [images,setImages] = useState()
    const [url,setUrl] = useState('')

    const Database = collection(db,"News")
    const navigation = useNavigate()


    const Addnews = async (e)=>{
      e.preventDefault()
      if(title==="" || news==="" || url==='' || vtu==='')
      {
          alert("Enter Details")
          return
      }
      await addDoc(Database, {Vtu: vtu,Title: title,News : news,url_link: url})
      navigation("/")
    }

    const Pic = ()=>{
        if(!images)
        {
          alert("ADD IMAGE")
          return false
        }
        const Img_ref = ref(storage,`News/${vtu}/${title}`)
        uploadBytes(Img_ref,images)
        .then((res)=>{
            getDownloadURL(res.ref)
            .then((link)=>{
              setUrl(link)
            })
        })
    }

  return (
    <div>
      <div className='add'>
        <input 
          placeholder='VTU'
          value={vtu}
          onChange={(e)=>setVtu(e.target.value)}
          required
        />
        <input 
          placeholder='TITLE'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />
        <input 
          placeholder='NEWS'
          value={news}
          onChange={(e)=>setNews(e.target.value)}
          required
        />
        <input
          type='file'
          onChange={(e)=>setImages(e.target.files[0])}
          required
        />
        <button onClick={Pic}>ADD IMAGE</button>
        <p>VTU : {vtu}</p>
        <p>TITLE : {title}</p>
        <p>NEWS : {news}</p>
        <p>URL : {url}</p>
        <button onClick={Addnews}>ADD NEWS</button>
      </div>
    </div>
  )
}

export default AddNews