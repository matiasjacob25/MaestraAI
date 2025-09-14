async function send(endpoint, options){
    return fetch('http://localhost:8000' + endpoint, options)
    .then (response => response.json())
    .catch (error => console.log(error))
}


// returns JSON object containing 3 different modules for the courseTopic
export async function getModules(courseTopic){
    const promptTemplate = `
    You are a teacher creating a course with three different lessons modules on the topic "${courseTopic}". 
    Your response should be formatted as a JSON object and only return the JSON object. 
    
    For example, if the topic was "biodiversity", your response should look similar to:
    { "moduleOne" : "Ecosystem Interdependence",
    "moduleTwo" : "Ecosystem Interdependence",
    "moduleThree": "Ecosystem Interdependence"}
    `

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: promptTemplate
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    return send('/completions', options)
    .then(response => response.choices[0].message.content)
}

// returns JSON object that create module content based on passed in params
export async function getContent(moduleTopic, depthOfLearning, learningFramework, language){
    const promptTemplate = `
    You are a teacher creating a lesson script according to the following parameters listed below.

    1. depth of learning: this is a number from 1-10 that represents level of understanding that you 
    want your students to have. 1 is the lowest level of understanding and 10 is the highest level of understanding.
    2. learning framework: this is the learning framework that you want to use to create the lesson script.
    3. language: this is the language that you should be using to create the lesson script.

    Please create a lesson script on the topic of "${moduleTopic}".
    The depth of learning is "${depthOfLearning}".
    The learning framework is "${learningFramework}".
    The language is "${language}".

    Please keep the lesson script under 100 words. Your response should only return the lesson script and nothing else.
    `

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: promptTemplate
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    return send('/completions', options)
    .then(response => response.choices[0].message.content)
}



// export function addItem(content){
//     return send("POST", "/api/items/", {content});
// };

// export function deleteItem(id){
//     return send("DELETE", "/api/items/" + id + "/", null);
// };

// export function getItems(){
//     return send("GET", "/api/items/", null);
// };