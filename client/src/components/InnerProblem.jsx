// import Header from './Header'
// import CodeMirror from '../codemirror-5.65.16/lib/codemirror.js'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Editor from "@monaco-editor/react";
import Axios from 'axios';
import { useParams } from 'react-router-dom';


export const InnerProblem = () =>{
    const [problem,setProblem] = useState({});
    const param = useParams();
    const [email,setEmail] = useState("")
    
    // State variable to set users source code
    const [userCode, setUserCode] = useState("");

    // State variable to set editors default language
    const [userLang, setUserLang] = useState("python");

    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");

    // State variable to set editors default font size
    const [fontSize, setFontSize] = useState(20);

    // State variable to set users output
    const [userOutput, setUserOutput] = useState("");

    // Loading state variable to show spinner
    // while fetching data
    const [loading, setLoading] = useState(false);

    const options = {
        fontSize: fontSize
    }

    useEffect(()=>{
        setEmail(localStorage.getItem('email'))
        getProblem();
    },[])

    const getProblem = async()=>{
        try{
            console.log(param.id);
            const response = await fetch(`http://localhost:8000/problem/getoneproblem/${param.id}`, { method: 'GET' });
            const res = await response.json();
            setProblem(res);
        } catch(error){
            console.error(error);
        } finally{
            setLoading(false);
        }
    }

    // Function to call the compile endpoint
    const  compile=async(submit)=> {
        setLoading(true);
        if (userCode === ``) {
            return
        }
        
        console.log(userCode);
        console.log(userLang);
        console.log(submit);
        console.log(email);

        const res = await fetch(`http://localhost:8000/editor/compile/${param.id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({code: userCode,language: userLang,submit: submit,email: email})
        })

        const data = await res.json();

        if(data.error){
            setUserOutput(data.error)
        }
        else{
            setUserOutput(data.message)
        }

        console.log("It's done");
        setLoading(false);
        
        // Post request to compile endpoint
        // Axios.post(`http://localhost:8000/editor/compile`, {
        //     code: userCode,
        //     language: userLang,
        //     submit: submit,
        //     email:email
        // }).then((res) => {
        //     setUserOutput(res.message);
        // }).then(() => {
        //     console.log("It's done");
        //     setLoading(false);
        // })
    }

    // Function to clear the output screen
    const clearOutput=()=> {
        setUserOutput("");
    }

    return(
        <>
            <div className="App">
                <Navbar
                    userLang={userLang} setUserLang={setUserLang}
                    userTheme={userTheme} setUserTheme={setUserTheme}
                    fontSize={fontSize} setFontSize={setFontSize}
                />
                <div className="main flex h-[calc(100vh-50px)]">
                    <div className="left-container relative flex-[60%] h-[calc(100vh-50px)]">
                        <Editor
                            options={options}
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={userTheme}
                            language={userLang}
                            defaultLanguage="python"
                            defaultValue="# Enter your code here"
                            onChange={(value) => { setUserCode(value) }}
                        />
                        <div className='flex flex-col'>
                        <button onClick={()=>{
                                compile(false)
                        }} className="run-btn absolute bottom-2.5 right-13 w-20 h-10 text-2xl font-bold bg-lime-400 border-none rounded transition duration-300 cursor-pointer active:bg-lime-600">
                            Run
                        </button>
                        <button onClick={()=>{
                                compile(true)
                        }} className="run-btn absolute bottom-2.5 right-4 w-24 h-10 text-2xl font-bold bg-lime-400 border-none rounded transition duration-300 cursor-pointer active:bg-lime-600">
                            submit
                        </button>
                        </div>
                    </div>
                    <div className="right-container flex-[40%] h-[calc(100vh-50px)] flex flex-col bg-gray-900 border-l-3 border-blue-600 p-1.5">
                        <h4 className="text-lime-300">Input: {problem.problem_title}</h4>
                        <div className="input-box flex-[50%]">
                            <textarea id="code-inp" className="w-full h-full text-white resize-none bg-gray-900 text-whitesmoke p-1.5 focus:outline-none" ></textarea>
                        </div>
                        <h4 className="text-lime-300 text-white">Output:</h4>
                        {loading ? (
                            <h1 className='text-white'>
                                Loading
                            </h1>
                            // <div className="spinner-box flex-[50%] bg-gray-900 flex justify-center items-center overflow-y-auto">
                            //     <img src={spinner} alt="Loading..." className="w-52" />
                            // </div>
                        ) : (
                            <div className="output-box flex-[50%] bg-gray-900 overflow-y-auto text-white relative">
                                <pre className="text-base whitespace-pre-wrap">{userOutput}</pre>
                                <button onClick={() => { clearOutput() }} className="clear-btn absolute bottom-3.5 right-4 w-20 h-10 text-2xl font-bold text-white bg-blue-600 border-none rounded transition duration-300 cursor-pointer">
                                    Clear
                                </button>
                            </div>
                         )} 
                    </div>
                </div>
            </div>
        </>
    )

}



// export const InnerProblem = () => {
//     const [lang, setLang] = useState("");
//     const [input, setInput] = useState("");
//     const [output, setOutput] = useState("");
//     const [code, setCode] = useState("");

//     useEffect(() => {
//         var option = document.getElementById("inlineFormSelectPref");
//         option.addEventListener("change", function () {
//             console.log(option.value)
//             if (option.value === "Java") {
//                 setLang("Java")
//             } else if (option.value === "Python") {
//                 setLang("Python")
//             } else {
//                 setLang("Cpp")
//             }
//         });
//     }, [])

//     const runCode = async()=>{
//         console.log(lang);
//         console.log(input);
//         console.log(code);
//         try {
//             const res = await fetch("http://localhost:8000/editor/compile", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({lang,input,code})
//             });
            
//             const response = await res.json();
//             setOutput(response.output);
//             console.log(output);
//         } catch (error) {
//             console.log(error)
//         }
//     }


// return (
//     <>
//             <div className=' flex flex-col h-screen' style={{ backgroundColor: '#B7C0EE' }}>
//                 <Header />
//                 <div className=' gap-5 flex flex-col p-5 h-full' style={{ backgroundColor: '#B7C0EE' }}>
//                     <div>
//                         Question
//                     </div>
//                     <div className='flex gap-5 w-full h-full'>
//                         <div className='flex flex-col gap-5 w-3/4 overflow-x-hidden'>
//                             <div className='flex bg-black justify-between text-white p-2 text-lg'>
//                                 <select className="form-select w-40 text-black font-bold p-1 rounded-md" id="inlineFormSelectPref">
//                                     <option selected>Choose...</option>
//                                     <option value="Java">Java</option>
//                                     <option value="Cpp">Cpp</option>
//                                     <option value="Python">Python</option>
//                                 </select>
//                                 <div className='flex gap-1'>
//                                     <button className='bg-green-900 font-bold px-4 rounded-md py-1'>Code Runner</button>
//                                     <button className='bg-green-900 font-bold px-4 rounded-md py-1' id='run' onClick={runCode}><i className='fa fa-play'></i></button>
//                                 </div>
//                             </div>
//                             <textarea type="text" id="editor" value={code} onChange={(e) => { setCode(e.target.value) }} className='bg-black text-fuchsia-100 h-full'></textarea>
//                         </div>
//                         <div className='flex flex-col bg-black gap-2 w-1/4 text-white justify-center text-center '>
//                             <div className='h-1/2 flex flex-col font-bold gap-2 text-lg p-2'>
//                                 <label htmlFor="Input">Input</label>
//                                 <textarea name="" id="input" typeof='text' value={input} onChange={(e)=>{setInput(e.target.value)}} className='form-control h-full text-black'></textarea>
//                             </div>
//                             <div className='h-1/2 flex flex-col font-bold gap-2 text-lg p-2'>
//                                 <label htmlFor="Output">Output</label>
//                                 <textarea name="" id="output" typeof='text' value={output} className='form-control h-full text-black'></textarea>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }


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