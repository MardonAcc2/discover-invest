"use client"
import Video from '@/app/video/page'
import {React,useState} from 'react'
import styles from './videomodal.module.scss'
const VideoModal = ({href,info}) => {
  
    const [view , setView] = useState(false);
    
  return (
    <div className={view?(styles.modal_two):(styles.modal)}>
<div className={styles.modal_absolute}>
  {console.log(info,"modal")}
<div className="relative  mx-auto w-[93%]  aspect-video">
    <div onClick={(e)=>{setView(!view)}} className={styles.modal_x}>x</div>
  <iframe
    src={href}
    title="YouTube video"
    className="absolute mt-15  mx-auto w-full h-full block"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  )
}

export default VideoModal