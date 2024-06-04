import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import CodeMirror from '../codemirror-5.65.16/lib/codemirror.js'

export const InnerProblem = () => {
    const [lang, setLang] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        var option = document.getElementById("inlineFormSelectPref");
        option.addEventListener("change", function () {
            console.log(option.value)
            if (option.value === "Java") {
                setLang("Java")
            } else if (option.value === "Python") {
                setLang("Python")
            } else {
                setLang("Cpp")
            }
        });
    }, [])

    const runCode = async()=>{
        console.log(lang);
        console.log(input);
        console.log(code);
        try {
            const res = await fetch("http://localhost:8000/editor/compile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({lang,input,code})
            });
            
            const response = await res.json();
            setOutput(response.output);
            console.log(output);
        } catch (error) {
            console.log(error)
        }
    }


return (
    <>
            <div className=' flex flex-col h-screen' style={{ backgroundColor: '#B7C0EE' }}>
                <Header />
                <div className=' gap-5 flex flex-col p-5 h-full' style={{ backgroundColor: '#B7C0EE' }}>
                    <div>
                        Question
                    </div>
                    <div className='flex gap-5 w-full h-full'>
                        <div className='flex flex-col gap-5 w-3/4 overflow-x-hidden'>
                            <div className='flex bg-black justify-between text-white p-2 text-lg'>
                                <select className="form-select w-40 text-black font-bold p-1 rounded-md" id="inlineFormSelectPref">
                                    <option selected>Choose...</option>
                                    <option value="Java">Java</option>
                                    <option value="Cpp">Cpp</option>
                                    <option value="Python">Python</option>
                                </select>
                                <div className='flex gap-1'>
                                    <button className='bg-green-900 font-bold px-4 rounded-md py-1'>Code Runner</button>
                                    <button className='bg-green-900 font-bold px-4 rounded-md py-1' id='run' onClick={runCode}><i className='fa fa-play'></i></button>
                                </div>
                            </div>
                            <textarea type="text" id="editor" value={code} onChange={(e) => { setCode(e.target.value) }} className='bg-black text-fuchsia-100 h-full'></textarea>
                        </div>
                        <div className='flex flex-col bg-black gap-2 w-1/4 text-white justify-center text-center '>
                            <div className='h-1/2 flex flex-col font-bold gap-2 text-lg p-2'>
                                <label htmlFor="Input">Input</label>
                                <textarea name="" id="input" typeof='text' value={input} onChange={(e)=>{setInput(e.target.value)}} className='form-control h-full text-black'></textarea>
                            </div>
                            <div className='h-1/2 flex flex-col font-bold gap-2 text-lg p-2'>
                                <label htmlFor="Output">Output</label>
                                <textarea name="" id="output" typeof='text' value={output} className='form-control h-full text-black'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


// useEffect(() => {
//     var editor = CodeMirror.fromTextArea(editorRef.current, {
//         mode: "text/x-c++src",
//         theme: "dracula",
//         lineNumbers: true,
//         autoCloseBrackets: true,
//     });

//     var temp = document.getElementById("editor");
//     console.log(temp)
//     temp.style.display = "";

//     // var width = window.innerWidth;
//     var input = document.getElementById("input");
//     var output = document.getElementById("output");
//     var run = document.getElementById("run");
//     // editor.setSize(0.7 * width, "500px");

//     var option = document.getElementById("inlineFormSelectPref");
//     option.addEventListener("change", function () {
//         console.log(option.value)
//         if (option.value === "Java") {
//             editor.setOption("mode", "text/x-java");
//         } else if (option.value === "python") {
//             editor.setOption("mode", "text/x-python");
//         } else {
//             editor.setOption("mode", "text/x-c++src");
//         }
//     });

//     var code;
//     run.addEventListener("click", async function () {
//         console.log("SOOO JAOOOOO");
//         code = {
//             code: temp.val(),
//             input: input.value,
//             lang: option.value
//         };
//         console.log(code);
//         var oData = await fetch("http://localhost:8000/editor/compile", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(code)
//         });
//         var d = await oData.json();
//         output.value = d.output;
//     });
//     return () => {

//         editor.toTextArea();
//         option.removeEventListener("change", null);
//         run.removeEventListener("click", null);
//     };
// }, []);