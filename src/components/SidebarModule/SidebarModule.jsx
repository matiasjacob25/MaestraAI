import "./SidebarModule.css"

const SidebarModule = (props) => {
    return (
        <div onClick={()=>{props.generateContent(props.moduleTopic, props.formData)}}id="module">
            <h1>{props.moduleTopic}</h1>
            {/* <h1>▼</h1> */}
        </div>
    )
}

export default SidebarModule;