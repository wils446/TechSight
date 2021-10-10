import React from "react";
import importData from "../../survey.json";
import InputSelect from "../../components/InputSelect";
import CategoriesCheckbox from "../../components/CategoriesCheckbox";
import type { Technology, DataInterface, CategoryI } from "../../common/interfaces";
import CategoriesDisplay from "../../components/CategoriesDisplay";

export default function Home(): JSX.Element {
    const surveyData = new Map<string, Technology>();
    importData.forEach((d) => surveyData.set(d[0] as string, d[1] as Technology));

    const categories = [
        {
            title: "Most Wanted",
            key: "mostWanted",
            display: true,
        },
        {
            title: "Most Loved",
            key: "mostLoved",
            display: true,
        },
        {
            title: "Popularity By All Developer",
            key: "popularityAllDev",
            display: true,
        },
        {
            title: "Popularity By Professional Developer",
            key: "popularityProfDev",
            display: true,
        },
        {
            title: "Salary",
            key: "salary",
            display: true,
        },
    ];

    const [techList] = React.useState<string[]>([...surveyData.keys()]);
    const [firstData, setFirstData] = React.useState<DataInterface>();
    const [secondData, setSecondData] = React.useState<DataInterface>();
    const [category, setCategory] = React.useState<CategoryI[]>(categories);

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
    const checkboxChangeHandler = (key: string) => {
        let categories = [...category];
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].key === key) {
                let category = categories[i];
                category.display = !category.display;
                categories[i] = category;
            }
        }

        setCategory(categories);
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

            {/* select category */}
            <CategoriesCheckbox category={category} changeHandler={checkboxChangeHandler} />

            {firstData?.inputValue && secondData?.inputValue ? (
                <div>
                    <CategoriesDisplay category={category} data1={firstData} data2={secondData} />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
