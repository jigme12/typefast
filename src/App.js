import React,{useState,useEffect} from 'react'
import './App.css'


export default function App() {
    const [text, setText]=useState("")
    const [timeRemaining, setTimeRemaining]= useState(5)
    const [isTimeRunning, setIsTimeRunning]= useState(false)

    function handleChange(e){
        const{value}=e.target
        setText(value)
    }
    function calculateWordCount(text){
        const wordsArr= text.trim().split(" ")
        return wordsArr.filter(word => word !=="").length
    }
    useEffect(()=>{
        if(isTimeRunning && timeRemaining > 0) {
        setTimeout(()=>{setTimeRemaining(time=>time-1)}, 1000)

        }},[timeRemaining, isTimeRunning])
    
    return (
        <div>
            <h1>How Fast Can You Type?</h1>
            <textarea
            onChange={handleChange}
             value={text} />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={()=>setIsTimeRunning(true)}>Start</button>
            <h1>Word Count: ???</h1>
            
        </div>
    )
}
