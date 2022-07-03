import './App.css';
import { useState } from 'react';
import { createUser } from './lib/hue';

function App() { 
  const [ip, setIp] = useState("") 
  const [username, setUsername] = useState("") 
  const [deviceType, setDeviceType] = useState("web") 
  const [state, setState] = useState("START")

  const start = () => {
    if(ip === "" || deviceType === "") return alert("Missing ip or device type")
    
    createUser(ip, deviceType)
      .then(result => {
          if(result[0].error.type === 101) {
            setState("LINK")
          }else {
            alert("Something went wrong, see console for more information")
            console.log(result)
          }
      }).catch(e => {
        console.log(e)
        alert("Something went wrong, see console for more information")
      })
  }

  const link = () => {
    createUser(ip, deviceType)
      .then(result => {
        console.log(result)
        if(result[0]?.success?.username) {
            setUsername(result[0].success.username)
            setState("FINSIHED")
        }else {
          alert("The link button has not yet been pressed. If you pressed it, take a look at the console.")
        }
    }).catch(e => {
      console.log(e)
      alert("Something went wrong, see console for more information")
    })
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Hue Bridge Username Generator</h1>

        {state === "START" && <>
          <label>Hue Bridge IP</label>
          <input value={ip} onChange={(e) => setIp(e.target.value)}></input>
          <label>Device Type</label>
          <input value={deviceType} onChange={(e) => setDeviceType(e.target.value)}></input>

          <button onClick={start}>Start</button>

          <p>Don't know what your IP is? You can find the IP on your router's dashboard or <a href='https://discovery.meethue.com/'>on this website</a>.</p>
          </>}

          {state === "LINK" && <>
            <p>Please press the link button</p>
            <button onClick={link}>I pressed it</button>
          </>}

          {state === "FINSIHED" && <>
            <h2>Congratulations! A user has been created.</h2>
            <p>Username:</p> 
            <code>{username}</code>
          </>}
      </header>
    </div>
  );
}

export default App;
