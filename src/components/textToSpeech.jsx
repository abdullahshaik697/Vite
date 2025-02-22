// import React, { useState , useEffect} from "react";

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

























import { useState } from "react";

const TextToSpeech = () => {

    const [text, setText] = useState()
    const handleClick = () => {
        if (!text) {
            alert("Please enter some text to speak!");

        } else {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    }

    return (

        <>

            <div className="container flex items-center border-4 m-auto my-2 rounded-2xl p-4 align-center flex-col">

                <h1 className="text-2xl font-bold mb-4">Text to Speech App</h1>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something..."
                    className="w-full text-lg h-56 p-2 border-1 mb-4 rounded-md"
                />

                <button
                    onClick={handleClick}
                    className="px-4 py-2 w-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Speak
                </button>
            </div>

        </>
    )

}

export default TextToSpeech;