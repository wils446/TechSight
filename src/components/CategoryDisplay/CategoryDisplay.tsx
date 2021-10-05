import { DataInterface } from "../../common/interfaces/DataInterface";
import BarChart from "../BarChart";

type ValueOf<T> = T[keyof T];

const categoryLabels = {
    "Most Wanted": "wanted",
    "Most Loved": "loved",
    Salary: "income",
    "Popularity (All Developer)": "popularityAll",
    "Popularity (Professional Developer)": "popularityProfessional",
} as const;

type CategoryDisplayProps = {
    title: keyof typeof categoryLabels;
    data1: DataInterface;
    data2: DataInterface;
    visible: boolean;
};

export default function CategoryDisplay({ title, data1, data2, visible }: CategoryDisplayProps) {
    if (!visible) return <></>;
    const key = categoryLabels[title] as ValueOf<typeof categoryLabels>;

    return (
        <div>
            <hr className="py-4" />

            <h1 className="text-2xl -mt-4">{title}</h1>
            <div className="mt-3 grid grid-cols-2">
                <div className="mx-auto py-4">
                    {data1 && data2 ? (
                        <div>
                            <BarChart data={data1.data[key]} color={data1.color} />{" "}
                            <span className="text-sm font-mono">
                                frequency (2021) : {data1.data[key][2021].frequency}
                            </span>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="mx-auto py-4">
                    {data2 && data2 ? (
                        <div>
                            <BarChart data={data2.data[key]} color={data2.color} />
                            <span className="text-sm font-mono">
                                frequency (2021) : {data2.data[key][2021].frequency}
                            </span>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <br />
        </div>
    );
}
