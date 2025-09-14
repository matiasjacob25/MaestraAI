import { useState, useEffect } from 'react'

const ChatComponent = () => {
    const [value, setValue] = useState(null)
    const [message, setMessage] = useState(null)

    const getMessages = async () => {
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
            setMessage(data.choices[0].message)
        } catch (error) {
            console.error(error)
        }
    }
    { message != null ? console.log(message.content) : console.log('message content null') }


    return (
        <div>
            <div className="main">
                {message && <p>{message.content}</p>}

            </div>
            <input id="messageIn" value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>Submit</div>
        </div>
    );

}

export default ChatComponent;