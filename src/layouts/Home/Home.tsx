import React from "react";
import dataSurvey from "../../survey.json";
import InputSelect from "../../components/InputSelect";

export default function Home(): JSX.Element {
    const [techList] = React.useState<string[]>(dataSurvey.map((d) => d[0] as string));
    const [input1Value, setInput1Value] = React.useState("");
    const [input2Value, setInput2Value] = React.useState("");

    const changeHandler1 = (str: string) => setInput1Value(str);
    const changeHandler2 = (str: string) => setInput2Value(str);

    return (
        <div className="container mx-auto">
            <h1 className="text-7xl my-3 font-normal">Techs Benchmark</h1>

            {/* select language */}
            <div className="mt-3 grid grid-cols-2">
                <div className="mx-auto">
                    <InputSelect changeHandler={changeHandler1} techList={techList} />
                </div>
                <div className="mx-auto">
                    <InputSelect changeHandler={changeHandler2} techList={techList} />
                </div>
            </div>
        </div>
    );
}
