import "./Chatbot.css"

const Chatbot = (props) => {
    
    const getResponse = (e) => {
        // should make async call to chatgpt API and then add response as 
        // a new chatbot-response element
        e.preventDefault();
        const input = document.getElementById("chatbot-input").value;
    }

    return (
        <>
            <div id="chatbot-response-container">
                <div id="chatbot-responses">
                    <p class="chatbot-response">
                        A: A famous war is a conflict or series of conflicts that have gained significant recognition, 
                        often due to their widespread impact, historical significance, scale, duration, or influence 
                        on societies, cultures, and global events. These wars are extensively studied, remembered, 
                        and discussed in academic, cultural, and societal contexts. 
                    </p>
                    <p class="chatbot-question">
                        Q: What is a famous war?
                    </p>
                    <p id="chatbot-intro-message">
                        Hello, I'm MaestraBot! I'm here to help you learn all about your course on Famous Wars. 
                        I can answer questions about the course content, and I can also help you find resources 
                        to help you learn.
                    </p>
                </div>
            </div>
            <div id="chatbot-input-container">
                <input id="chatbot-input" type="text" placeholder="Ask a question ...">
                </input>
                <button onClick={getResponse} id="chatbot-submit-button">CHAT</button>
            </div>
        </>
    )
}

export default Chatbot;