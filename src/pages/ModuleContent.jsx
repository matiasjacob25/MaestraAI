import "../styles/ModuleContent.css";
import { getContent } from "../api/api.js"

import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import SidebarModule from "../components/SidebarModule/SidebarModule";
import Chatbot from "../components/Chatbot/Chatbot";
import convertTextToAudio from "../utilities/eleven.js";

const ModuleContent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isChatbotSelected, setIsChatBotSelected] = useState(false)
    const [modules, setModules] = useState({moduleOne: "", moduleTwo: "", moduleThree: ""})
    const [courseTopic, setCourseTopic] = useState("")
    const [isGeneratingContent, setIsGeneratingContent] = useState(false);
    
    useEffect(() => {
        setModules(location.state.modules);
        setCourseTopic(location.state.formData.courseTopic);
    }, []);

    function generateContent(moduleTopic, formData){
        // where formData = {
        //     depthOfLearning: '',
        //     learningFramework: '',
        //     language: '',
        //     courseTopic: ''
        // }
        setIsGeneratingContent(true);

        // getContent(moduleTopic, formData.depthOfLearning, formData.learningFramework, formData.language)
        // .then(async (response) => {
            // console.log("successfully retrieved content str: " + response)
            
            // // convert response to audio
            // const audioData = await convertTextToAudio(response);
            
            // // Create a new audio file from the fetched audio data with matching MIME type
            // const audioBlob = new Blob([audioData], { type: 'audio/mp3' });
            // const blobUrl = URL.createObjectURL(audioBlob);
            // let file = new File([audioBlob], "audioOutput");
            // console.log('file:', file);

            // // store generated .mp3 file in wav2Lip Foler

            // //remove content generation prompt
            // setIsGeneratingContent(false);
        // });
    }

    return (
        <div id="module-content-page-wrapper">
            <div id="sidebar-container">
                {isChatbotSelected ? 
                    <div id="chatbox-container">
                        <div id="container-header">
                            <h3 onClick={()=>{navigate("/")}} id="sidebar-course-title">{courseTopic.toUpperCase()}</h3>
                            <button onClick={()=> {setIsChatBotSelected(false)}} class="sidebar-toggle-button">Modules</button>
                        </div>
                        <Chatbot />
                    </div> 
                    :
                    <div id="modules-container">
                        <div id="container-header">
                            <h3 onClick={()=>{navigate("/")}} id="sidebar-course-title">{courseTopic.toUpperCase()}</h3>
                            <button onClick={()=> {setIsChatBotSelected(true)}} class="sidebar-toggle-button">Chatbot</button>
                        </div>
                        {/* <SidebarModule id="temp-testing-sidebar-module" moduleTopic={"World War II"} /> */}
                        <SidebarModule generateContent={generateContent} formData={location.state.formData} moduleTopic={modules.moduleOne} />
                        <SidebarModule generateContent={generateContent} formData={location.state.formData} moduleTopic={modules.moduleTwo} />
                        <SidebarModule generateContent={generateContent} formData={location.state.formData} moduleTopic={modules.moduleThree} />
                        <button id="content-container-button" onClick={()=>{ navigate("/videos", {state: {modules: modules, formData: location.state.formData}})}}>Video Demos</button>

                    </div>
                }
            </div>
            <div id="content-container">
                <div id="content-container-wrapper">
                    <video id="content-wav2lip-video" controls width="60%" height="40%">
                        <source id="content-wav2lip-video-src" src={location.state.demoFile} type="video/mp4" />
                        This browser does not support the video element.
                    </video>
                    {isGeneratingContent ? <h2 style={{color: "white"}}>Generating Content . . .</h2> : null}
                </div>
            </div>
        </div>
    )
  };
  
  export default ModuleContent;