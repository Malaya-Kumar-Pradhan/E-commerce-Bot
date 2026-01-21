import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [message,setMessage]=useState([{role:"bot",content:"Hello I am E-Bot, Ask me about your order-status."}])
  const [isloading,setIsloading]=useState(false)
  const sendMessage=async()=>{
    if(!input.trim()) return

    const userMessage={role:"user",content:input}
    setMessage((prev)=>[...prev,userMessage])
    setInput("")
    setIsloading(true)

    try{
      const response=await fetch("https://e-commerce-bot-ohxx.onrender.com/chat",{
        method:"POST",
        headers:{"content-type":"application/JSON"},
        body:JSON.stringify({message:userMessage.content})
      })
      const data=await response.json()
      const botMessage= {role:"bot",content:data.response}
      setMessage((prev)=>[...prev,botMessage])
    }
    catch(error){
      console.error("Error:",error)
      const errorMessage={role:"bot",content:"Error connecting to Server"}
      setMessage((prev)=>[...prev,errorMessage])
    }
    finally{
      setIsloading(false)
    }
  }
  return (
    <div className='chat-container'>
      <header className='chat-header'>
        <h1>Order E-Bot</h1>
      </header>
      <div className='messages-window'>
        {message.map((msg,index)=>(
          <div key={index} className={`message-bubble ${msg.role}`}>
            <strong>{msg.role==="user"?"You":"Bot"}</strong>
            <p>{msg.content}</p>
          </div>
        ))}
        {isloading && <div className='loading'>Thinking...</div>}
      </div>
      <div className='input-area'>
        <input 
        type="text" 
        value={input} 
        placeholder='Type your Message...' 
        onChange={(event)=>{setInput(event.target.value)}}
        onKeyDown={(event)=>event.key==="Enter" && sendMessage()}
        />
        <button type='button' onClick={sendMessage} disabled={isloading}>Send</button>
      </div>
    </div>
  )
}

export default App
