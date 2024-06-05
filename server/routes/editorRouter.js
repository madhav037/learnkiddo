const express = require('express');
const router = express.Router();
const compiler = require("compilex");
const Axios = require("axios");

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

router.post('/compile', (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;

    console.log(code);
    console.log(language);
    console.log(input);

    if (language === "python") {
        language = "py"
    }

    let data = ({
        "code": code,
        "language": language,
        "input": input
    });
    let config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    //calling the code compilation API
    Axios(config)
        .then((response) => {
            res.send(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
})

module.exports = router;