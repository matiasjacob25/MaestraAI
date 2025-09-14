import "../styles/VideoDemo.css";

import { useNavigate, useLocation } from "react-router-dom";

const VideoDemo = () => {
  const navigate = useNavigate();
  const location = useLocation();

    return (
      <div id="video-demo-page-wrapper">
        <div id="video-demo-container">
          <div class="video-demo">
            <video id="wav2lip-video-demo-one" controls width="60%" height="40%">
              <source id="wav2lip-video-src-one" src="french_man.mp4" type="video/mp4" />
              This browser does not support the video element.
            </video>
            <div class="video-demo-details">
              <h3>Module Topic: Biodiversity across the planet</h3>
              <h3>Depth Of Learning: 5</h3>
              <h3>Learning Framework: Reflective</h3>
              <h3>Language: French</h3>
            </div>
          </div>

          <div class="video-demo">
            <video id="wav2lip-video-demo-two" controls width="60%" height="40%">
              <source id="wav2lip-video-src-two" src="british_man.mp4" type="video/mp4" />
              This browser does not support the video element.
            </video>
            <div class="video-demo-details">
              <h3>Module Topic: Value propositions in business</h3>
              <h3>Depth Of Learning: 2</h3>
              <h3>Learning Framework: Discovery Learning</h3>
              <h3>Language: English</h3>
              <h3>Geographical Location: London, England</h3>
            </div>
          </div>

          <div class="video-demo">
            <video id="wav2lip-video-demo-three" controls width="60%" height="40%">
              <source id="wav2lip-video-src-three" src="indian_man.mp4" type="video/mp4" />
              This browser does not support the video element.
            </video>
            <div class="video-demo-details">
              <h3>Module Topic: Reasons behind world war II</h3>
              <h3>Depth Of Learning: 7</h3>
              <h3>Learning Framework: Socratic</h3>
              <h3>Language: Hindi</h3>
              <h3>Racial Background: Indian</h3>
            </div>
          </div>
        </div>
        <button id="video-container-button" onClick={()=>{ navigate("/module", {state: {modules: location.state.modules, formData: location.state.formData, demoFile: "hispanic.mp4"}}) }}>Back (Module Content)</button>
      </div>
    )
  };
  
  export default VideoDemo;