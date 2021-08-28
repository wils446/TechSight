import React from "react";
import importData from "../../survey.json";
import InputSelect from "../../components/InputSelect";
import { Technology } from "../../common/interfaces/DataTyping";
import CategoryDisplay from "../../components/CategoryDisplay";
import { DataInterface } from "../../common/interfaces/DataInterface";

export default function Home(): JSX.Element {
    const surveyData = new Map<string, Technology>();
    importData.forEach((d) => surveyData.set(d[0] as string, d[1] as Technology));

    const [techList] = React.useState<string[]>([...surveyData.keys()]);
    const [firstData, setFirstData] = React.useState<DataInterface>();
    const [secondData, setSecondData] = React.useState<DataInterface>();

    const changeHandler1 = (str: string) => {
        setFirstData({
            inputValue: str,
            data: surveyData.get(str)!,
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        });
    };
    const changeHandler2 = (str: string) => {
        setSecondData({
            inputValue: str,
            data: surveyData.get(str)!,
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        });
    };

    return (
        <div className="container mx-auto">
            <header className="h-36 align-middle py-7">
                <h1 className="text-5xl font-normal">Technologies Data Charts</h1>
            </header>
            {/* select language */}
            <div className="mt-3 grid grid-cols-2 mb-3">
                <div className="mx-auto">
                    <InputSelect changeHandler={changeHandler1} techList={techList} />
                </div>
                <div className="mx-auto">
                    <InputSelect changeHandler={changeHandler2} techList={techList} />
                </div>
            </div>
            <br />
            {/* Most Wanted */}
            {firstData?.inputValue && secondData?.inputValue ? (
                <div>
                    <CategoryDisplay title={"Most Wanted"} data1={firstData} data2={secondData} />
                    <CategoryDisplay title={"Most Loved"} data1={firstData} data2={secondData} />
                    <CategoryDisplay title={"Popularity (All Developer)"} data1={firstData} data2={secondData} />
                    <CategoryDisplay
                        title={"Popularity (Professional Developer)"}
                        data1={firstData}
                        data2={secondData}
                    />
                    <CategoryDisplay title={"Salary"} data1={firstData} data2={secondData} />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
