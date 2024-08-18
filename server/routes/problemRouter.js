const express = require('express');
const router = express.Router();
const Problem = require('../models/problemModel');

router.post('/addproblem', async (req, res) => {
    const { problem_id, problem_title, time_limit, max_memory, problem_statement, input_statement, output_statement, examples, level, category } = await req.body;

    try {
        const pro = new Problem({ problem_id, problem_title, time_limit, max_memory, problem_statement, input_statement, output_statement, examples, level, category })

        await pro.save();

        return res.status(200).send({ message: "Problem added successfully" });
    } catch (error) {
        console.log(error);
    }
})

router.get('/getallproblem', async (req, res) => {
    try {
        const allProblem = await Problem.find();

        return res.status(200).json(allProblem);

    } catch (error) {
        console.log(error);
    }
})

router.get('/getoneproblem/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const prob = await Problem.findOne({ problem_id: id });

        if (!prob) return res.status(401).send({ message: "Problem can't be found." })

        return res.status(200).json(prob);

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;


const prob = {
    "problem_id": 3,
    "problem_title": "Phone Desktop",
    "time_limit": 1,
    "max_memory": 256,
    "problem_statement": "Little Rosie has a phone with a desktop (or launcher, as it is also called). The desktop can consist of several screens. Each screen is represented as a grid of size 5x3, i.e., five rows and three columns. There are x applications with an icon size of 1x1 cells; such an icon occupies only one cell of the screen.There are also y applications with an icon size of 2x2 cells; such an icon occupies a square of 4 cells on the screen.Each cell of each screen can be occupied by no more than one icon. Rosie wants to place the application icons on the minimum number of screens.Help her find the minimum number of screens needed.",
    "input_statement": "The first line of the input contains t(1≤t≤104) — the number of test cases. The first and only line of each test case contains two integers x and y(0≤x, y≤99) — the number of applications with a 1x1 icon and the number of applications with a 2x2 icon, respectively.",
    "output_statement": "For each test case, output the minimal number of required screens on a separate line.",
    "examples": [
        {
            "input": "1 1",
            "output": "1"
        },
        {
            "input": "7 2",
            "output": "1"
        },
        {
            "input": "12 4",
            "output": "2"
        },
        {
            "input": "0 3",
            "output": "2"
        },
        {
            "input": "1 0",
            "output": "1"
        },
        {
            "input": "8 1",
            "output": "1"
        },
        {
            "input": "0 0",
            "output": "0"
        },
        {
            "input": "2 0",
            "output": "1"
        },
        {
            "input": "15 0",
            "output": "1"
        },
        {
            "input": "8 2",
            "output": "2"
        },
        {
            "input": "0 9",
            "output": "5"
        }
    ],
    "level": "medium",
    "category": ["greedy", "maths"]
}
