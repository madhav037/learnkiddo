const express = require('express');
const router = express.Router();
const compiler = require("compilex");
const Axios = require("axios");
const { version } = require('mongoose');
const Problem = require('../models/problemModel');
const User = require('../models/userModel');

const language_version = {
    matl: "22.7.4",
    bash: "5.2.0",
    befunge93: "0.2.0",
    bqn: "1.0.0",
    brachylog: "1.0.0",
    brainfuck: "2.7.3",
    cjam: "0.6.5",
    clojure: "1.10.3",
    cobol: "3.1.2",
    coffeescript: "2.5.1",
    cow: "1.0.0",
    crystal: "0.36.1",
    dart: "2.19.6",
    dash: "0.5.11",
    typescript: "5.0.3",
    javascript: "18.15.0",
    basicnet: "5.0.201",
    fsharpnet: "5.0.201",
    csharpnet: "5.0.201",
    fsi: "5.0.201",
    dragon: "1.9.8",
    elixir: "1.11.3",
    emacs: "27.1.0",
    emojicode: "1.0.2",
    erlang: "23.0.0",
    file: "0.0.1",
    forte: "1.0.0",
    forth: "0.7.3",
    freebasic: "1.9.0",
    awk: "5.1.0",
    c: "10.2.0",
    cpp: "10.2.0",
    d: "10.2.0",
    fortran: "10.2.0",
    go: "1.16.2",
    golfscript: "1.0.0",
    groovy: "3.0.7",
    haskell: "9.0.1",
    husk: "1.0.0",
    iverilog: "11.0.0",
    japt: "2.0.0",
    java: "15.0.2",
    jelly: "0.1.31",
    julia: "1.8.5",
    kotlin: "1.8.20",
    lisp: "2.1.2",
    llvm_ir: "12.0.1",
    lolcode: "0.11.2",
    lua: "5.4.4",
    csharp: "6.12.0",
    basic: "6.12.0",
    nasm: "2.15.5",
    nasm64: "2.15.5",
    nim: "1.6.2",
    ocaml: "4.12.0",
    octave: "8.1.0",
    osabie: "1.0.1",
    paradoc: "0.6.0",
    pascal: "3.2.2",
    perl: "5.36.0",
    php: "8.2.3",
    ponylang: "0.39.0",
    prolog: "8.2.4",
    pure: "0.68.0",
    powershell: "7.1.4",
    pyth: "1.0.0",
    python2: "2.7.18",
    python: "3.10.0",
    racket: "8.3.0",
    raku: "6.100.0",
    retina: "1.2.0",
    rockstar: "1.0.0",
    rscript: "4.1.1",
    ruby: "3.0.1",
    rust: "1.68.2",
    samarium: "0.3.1",
    scala: "3.2.2",
    smalltalk: "3.2.3",
    sqlite3: "3.36.0",
    swift: "5.3.3",
    vlang: "0.3.3",
    vyxal: "2.4.1",
    yeethon: "3.10.0",
    zig: "0.10.1"
}

// router.post("/compile", function (req, res) {
//     var code = req.body.code
//     var input = req.body.input
//     var lang = req.body.lang

//     console.log(code);
//     console.log(input);
//     console.log(lang);

//     try {
//         if (lang == "Cpp") {
//             if (!input) {
//                 var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
//                 compiler.compileCPP(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
//                 compiler.compileCPPWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//         }
//         else if (lang == "Java") {
//             if (!input) {
//                 var envData = { OS: "windows" };
//                 compiler.compileJava(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 })
//             }
//             else {
//                 //if windows  
//                 var envData = { OS: "windows" };
//                 //else
//                 compiler.compileJavaWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 })
//             }
//         }
//         else if (lang == "Python") {
//             if (!input) {
//                 var envData = { OS: "windows" };
//                 compiler.compilePython(envData, code, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//             else {
//                 var envData = { OS: "windows" };
//                 compiler.compilePythonWithInput(envData, code, input, function (data) {
//                     if (data.output) {
//                         res.send(data);
//                     }
//                     else {
//                         res.send({ output: "error" })
//                     }
//                 });
//             }
//         }
//     }
//     catch (e) {
//         console.log("error: "+e)
//     }
// })

// router.post('/compile', (req, res) => {
//     //getting the required data from the request
//     let code = req.body.code;
//     let language = req.body.language;
//     let input = req.body.input;

//     console.log(code);
//     console.log(language);
//     console.log(input);

//     if (language === "python") {
//         language = "py"
//     }

//     let data = ({
//         "code": code,
//         "language": language,
//         "input": input
//     });
//     let config = {
//         method: 'post',
//         url: 'https://api.codex.jaagrav.in',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: data
//     };

//     //calling the code compilation API
//     Axios(config)
//         .then((response) => {
//             res.send(response.data)
//             console.log(response.data)
//         }).catch((error) => {
//             console.log(error);
//         });
// })


router.post('/compile/:id', async (req, res) => {
    const id = req.params.id;

    let { code, language, submit, email } = req.body;

    console.log(code);


    const problem = await Problem.findOne({ problem_id: id });

    if (!problem) {
        return res.status(404).send('Problem not found');
    }

    const example = problem.examples;

    let range;

    if (submit == true) {
        range = example.length
    } else {
        range = 3
    }

    console.log("range - " + range);

    let user;
    if (submit) user = await User.findOne({ email: email });

    for (let i = 0; i < range; i++) {
        const response = await compileCode(language, code, example[i]);

        if (response) {
            console.log(response.status);
            
            if (response.status == 201) {
                response.message = response.message.replace("\n", "");
                console.log(response.message);

                if (response.message !== example[i].output) {
                    if (submit) {
                        user.history.push({ problemID: problem.problem_id, problem_title: problem.problem_title, status: false, language: language, code: code })
                        await user.save();
                    }
                    return res.json({ status: 405, error: example[i], message: `wrong output on test case ${i + 1}` });
                }
            }
            else {
                if (submit) {
                    user.history.push({ problemID: problem.problem_id, problem_title: problem.problem_title, status: false, language: language, code: code });
                    await user.save();
                }
                if (response.status == 401) {
                    return res.json({ status: 401, error: response.message, message: "" });
                } else if (response.status == 402) {
                    return res.json({ status: 402, error: response.message, message: "" });
                } else if (response.status == 403) {
                    return res.json({ status: 403, error: "Error While Fetching Data", message: "" });
                }
            }
        }

        console.log("sleep start");
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("sleep end");
    }

    if (submit) {
        console.log(problem.problem_title);

        if(!user.solvedQuestion.includes(problem._id))
        {
            user.solvedQuestion.push(problem._id);
            user.history.push({ problemID: problem.problem_id, problem_title: problem.problem_title, status: true, language: language, code: code });
        }
        else
        {
            const historyIndex = user.history.findIndex(entry => entry.problemID === problem.problem_id);
    
            if (historyIndex !== -1) {
                user.history[historyIndex].status = true;
                user.history[historyIndex].code = code;
                user.history[historyIndex].language = language;
            }
        }
        
        await user.save();
    }

    console.log("Run or complied successfully");

    return res.json({ status: 200, error: "", message: "Code Compiled successfully in all testcases." });
})


const compileCode = async (language, code, example) => {
    let url = "https://emkc.org/api/v2/piston/execute"
    let data = {};

    if (example.input.includes(' ')) {
        example.input = example.input.split(' ').join('\n');
    }

    if (language == "c" || language == "cpp") {
        url = "https://api.codex.jaagrav.in";

        data = {
            language: language,
            code: code,
            input: example.input
        };
    } else {
        data = {
            language: language,
            version: language_version[language],
            files: [
                {
                    content: code,
                }
            ],
            stdin: example.input
        }
    }



    const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(res => res.json());

    console.log(response);
    if (language == 'c' || language == 'cpp') {
        if (response.output !== "") {
            return { status: 201, message: response.output }
        } else if (response.error !== "") {
            return { status: 402, message: response.error }
        }
        else {
            return { status: 403, message: "Error While Fetching Data" } // server fetching error
        }
    }
    else {
        if (response.message) {
            return { status: 401, message: response.message } // version err
        } else if (response.run) {
            if (response.run.stderr != "") {
                console.log(response);
                return { status: 402, message: response.run.stderr } // compilation err
            } else if (response.run.output != "") {
                return { status: 201, message: response.run.output } // success
            }
            else {
                return { status: 201, message: response.run.output }
            }
        } else {
            return { status: 403, message: "Error While Fetching Data" } // server fetching error
        }
    }
}

module.exports = router;