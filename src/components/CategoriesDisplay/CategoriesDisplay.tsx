import { CategoryI } from "../../common/interfaces";
import { DataInterface } from "../../common/interfaces/DataInterface";
import CategoryDisplay from "./CategoryDisplay";

type CategoriesDisplayProps = {
    category: CategoryI[];
    data1: DataInterface;
    data2: DataInterface;
};

export default function CategoriesDisplay({ category, data1, data2 }: CategoriesDisplayProps) {
    const categoryDisplay = category.map((c, index) => {
        return <CategoryDisplay key={index} data1={data1} data2={data2} title={c.title} visible={c.display} />;
    });

    return <div>{categoryDisplay}</div>;
}
