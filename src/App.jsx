import React, { useEffect, useState } from "react";
import Greeter from "./componets/Greeter";

//  function component named "App", and return a simple JSX element
const App = () => {
    const [username, setUsername] = useState("")
    const [loaded, setLoaded] = useState(false);

    console.log(username)

     useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    }, []);
    
   
    if (loaded) {
        return (
            <>
                <h1 style={{ fontFamily: "sans-serif" }}>Welcome, we've been waiting for you.</h1>
                {/* from the greeter function define props  */}
                <Greeter name="Abby" phrase="Hello" />
                <Greeter name="Dalphine" phrase="Hi" />
                <Greeter name="Scobby" phrase="scobby snacks" />

                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>

                <p>Welcome, {username} </p>
            </>
        )
    } else {
        return (
            <>
                <h1>Web loading...</h1>
                <button onclick={() => setLoaded(true)}>Relaod</button>
            </>
        )
    }
}

export default App;
