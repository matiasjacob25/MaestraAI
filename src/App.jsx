import './App.css';
// import fetch from "node-fetch";


const App = () => {
  const visibleButton = { backgroundColor: "red" }

  // can expect generation on a 10-20 second audio.mp3/wav
  // with low resolution video to take 1-2 minutes to render
  const generateLipsyncVideo = async () => {
    try {
      const response = await fetch('http://localhost:8000/wav2lip', { method: "POST" })
      const data = await response.json()
      console.log("data: " + JSON.stringify(data))

      //at this point, should expect the newly created video rendered on UI

      // if (data.state === "success") {
      //   const videoSrc = document.getElementById("test-wav2lip-")
      // }

    } catch (error) {
      console.error(error)
    }
  }

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <section className="side-bar">
        <button onClick={getMessages}>+ New Chat </button>
        <button style={visibleButton} onClick={generateLipsyncVideo} id="test-wav2lip-btn">generate video with Wav2Lip</button>
        <video id="test-wav2lip-video" controls width="250" height="250">
          <source id="test-wav2lip-video-src" src="result_voice.mp4" type="video/mp4" />
          This browser does not support the video element.
        </video>
        <nav>
          <p>MaestraAI</p>
        </nav>
      </section>
      <section className="main"></section>
    </div>
  );
}

export default App;
