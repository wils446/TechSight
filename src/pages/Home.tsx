import { Category, Technology } from "../common/interface/DataTyping";
import surveyDataFile from "../data/survey.json";
import Select from "react-select";
import { createRef, useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import { LineChart, CategoryButton } from "../components";

function Home() {
    const surveyData = new Map<string, Technology>();
    surveyDataFile.forEach((d) => surveyData.set(d[0] as string, d[1] as Technology));

    const [techList] = useState([...surveyData.keys()]);
    const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
    const [category, setCategory] = useState<Category>("popularityAll");
    const [input, setInput] = useState<string[]>([]);
    const chartRef = createRef<ChartJSOrUndefined<"line", string[], string>>();

    const getTechOptions = () => {
        return techList.map((t) => ({ value: t, label: t }));
    };

    const handleCategoryChange = (ctgry: Category) => {
        setCategory(ctgry);
    };

    useEffect(() => {
        const currentTech: Technology[] = input.map((t) => {
            return surveyData.get(t)!;
        });

        setSelectedTech([...currentTech]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    //register chart
    ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

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
            <div className="app-body">
                <CategoryButton categoryLabel={category} categoryOnChangeHandler={handleCategoryChange} />
                {selectedTech.length ? (
                    <LineChart data={selectedTech} chartRef={chartRef} category={category} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Home;
