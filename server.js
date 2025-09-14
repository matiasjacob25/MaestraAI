// import fetch from "node-fetch";

const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const API_KEY = '' // specify your OpenAI API key here

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message }],
            max_tokens: 1000,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

// when triggered, runs lipsync model on the video and audio files (manually) specified.
// On success, resulting video is stored as maestra/public/result_voice.mp4
app.post('/wav2lip', (req, res) => {
    const spawn = require('child_process').spawn
    const path = require('path');
    const videoFile = "test5.mp4" //specify accordingly in wav2lip folder
    const audioFile = "Recording.mp3" //specify accordingly in wav2lip folder
    const scriptPath = path.join(__dirname, 'wav2lip');
    // res.send({state: "success"}).end();

    console.log("Running lipsync generation model . . .")
    const pyProcess = spawn("python",
    [
        'inference.py',
        '--checkpoint_path',
        'checkpoints/wav2lip_gan.pth',
        '--face',
        videoFile,
        '--audio',
        audioFile
    ], {cwd: scriptPath})

    pyProcess.on('close', (code) => {
        if (code === 0) {
            console.log('Lipsync video has been successfully generated');
            res.send({state: "success"}).end();
        } else {
            console.error(`Child process finished with error code ${code}`);
        }
    })
})

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "how are you?" }],
            max_tokens: 250,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})


app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))

