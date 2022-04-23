import { Technology } from "../common/interface/DataTyping";
import surveyDataFile from "../data/survey.json";
import Select from "react-select";
import { useEffect, useState } from "react";
import { LineChart } from "../components";

function Home() {
    const surveyData = new Map<string, Technology>();
    surveyDataFile.forEach((d) => surveyData.set(d[0] as string, d[1] as Technology));

    const [techList] = useState([...surveyData.keys()]);
    const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
    const [input, setInput] = useState<string[]>([]);

    const getTechOptions = () => {
        return techList.map((t) => ({ value: t, label: t }));
    };

    useEffect(() => {
        input.forEach((t) => {
            if (surveyData.has(t)) {
                setSelectedTech((prev) => [...prev, surveyData.get(t) as Technology]);
            }

            if (selectedTech.length > input.length) {
                setSelectedTech((prev) => prev.filter((tech) => input.includes(tech.name)));
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    return (
        <div className="App">
            <header className="app-header">
                <h1 className="text-5xl font-semibold tracking-wider font-montserrat mb-8">TechSight</h1>
                <Select
                    className="text-left"
                    isMulti
                    options={getTechOptions()}
                    onChange={(e) => {
                        setInput(e.map((t) => t.value));
                    }}
                    placeholder="Select Technology..."
                />
            </header>
        </div>
    );
}

export default Home;
