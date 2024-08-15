import React from 'react';
import Select from 'react-select';
import '../style/custom.css'

const Navbar = ({ userLang, setUserLang, userTheme,
    setUserTheme, fontSize, setFontSize }) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]

    return (
        <>
            <div className="navbar flex items-center pl-5 h-12 text-center text-lime-300 bg-gray-700 gap-5">
                <h1 className="text-lg font-bold">Geeks Code Compiler</h1>
                <Select options={languages} value={userLang}
                    onChange={(e) => setUserLang(e.value)}
                    placeholder={userLang}
                    className="css-2b097c-container"
                />
                <Select options={themes} value={userTheme}
                    onChange={(e) => setUserTheme(e.value)}
                    placeholder={userTheme}
                    className="css-2b097c-container"
                />
                <label className="text-base font-medium">Font Size</label>
                <input type="range" min="18" max="30"
                    value={fontSize} step="2"
                    onChange={(e) => { setFontSize(e.target.value) }}
                    className="form-range h-9 w-20 text-gray-700 bg-gray-700 border border-lime-300 rounded"
                />
            </div>

        </>
    )
}

export default Navbar