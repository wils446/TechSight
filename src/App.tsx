import "./App.css";
import { useState } from "react";
import { Technology } from "./common/interface/DataTyping";
import surveyDataFile from "./data/survey.json";

function App() {
    const surveyData = new Map<string, Technology>();
    surveyDataFile.forEach((d) => surveyData.set(d[0] as string, d[1] as Technology));

    const [techList] = useState([...surveyData.keys()]);

    return (
        <div className="App">
            <header className="app-header">
                <h1 className="text-5xl font-semibold tracking-wider font-montserrat mb-8">TechSight</h1>
                <input type="text" list="languages" autoComplete="off" />
                <datalist id="languages">
                    {techList.map((t, index) => {
                        return <option className="w-full" key={index} value={t} />;
                    })}
                </datalist>
            </header>
        </div>
    );
}

export default App;
