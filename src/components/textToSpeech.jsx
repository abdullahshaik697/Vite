// import React, { useState , useEffect} from "react";

import { useEffect, useState } from "react";

// function TextToSpeech() {
//   const [text, setText] = useState("");
//   const [voice, setVoice] = useState(null);
//   const [voices, setVoices] = useState([]);

//   // Load available voices
//  useEffect(() => {
//     const synth = window.speechSynthesis;
//     const loadVoices = () => {
//       setVoices(synth.getVoices());
//     };

//     if (synth.onvoiceschanged !== undefined) {
//       synth.onvoiceschanged = loadVoices;
//     }
//     loadVoices();
//   }, []);

//   // Handle speaking
//   const handleSpeak = () => {
//     if (text.trim() === "") return alert("Please enter some text to speak!");

//     const utterance = new SpeechSynthesisUtterance(text);
//     if (voice) utterance.voice = voice;
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-4">Text to Speech App</h1>

//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//         className="w-full max-w-md h-32 p-2 border rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       <select
//         onChange={(e) => setVoice(voices.find((v) => v.name === e.target.value))}
//         className="w-full max-w-md p-2 border rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <option value="">Default Voice</option>
//         {voices.map((v) => (
//           <option key={v.name} value={v.name}>
//             {v.name} ({v.lang})
//           </option>
//         ))}
//       </select>

//       <button
//         onClick={handleSpeak}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
//       >
//         Speak
//       </button>
//     </div>
//   );
// }

// export default TextToSpeech;























const TextToSpeech = () => {

    const [voices, setVoices] = useState([])
    const [text, setText] = useState()

    useEffect(() => {
        const synth = window.speechSynthesis;
        const loadVoices = () => {
            setVoices(synth.getVoices());
            console.log(synth);
            console.log(voices);

        };
        synth.onvoiceschanged = loadVoices;
        loadVoices();
    }, [])

    return (

        <>

            <h1 className="text-2xl font-bold mb-4">Text to Speech App</h1>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
                className="w-full max-w-md h-32 p-2 border rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
                className="w-full max-w-md p-2 border rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
           
           >
                <option value="">Default Voice</option>

                {voices.map((v, i) => (
                    <option key={i}>{v.name} {v.lang}</option>
                ))}
            </select>


            <button
       
         className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
       >
         Speak
       </button>

        </>
    )

}

export default TextToSpeech;