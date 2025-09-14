import { useState, useEffect, useContext } from 'react'
import { Context } from "./App";

const ChatComponent = () => {
    const [value, setValue] = useState(null)
    const [message, setMessage] = useState(null)

    const { setPlan } = useContext(Context);

    const generatePlan = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await fetch('http://localhost:8000/completions', options)
            const data = await response.json()
            console.log(data)
            setPlan(data.choices[0].message)
        } catch (error) {
            console.error(error)
        }
    }

    // useEffect(() => {
    //     setPlan(message);
    // }, [message]);

    // { message != null ? console.log(message.content) : console.log('message content null') }

    

    return (
        <div>
            <p>What do you want to learn today?</p>

            <input id="messageIn" value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={generatePlan}>Submit</div>
        </div>
    );

}

export default ChatComponent;