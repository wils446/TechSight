import { CategoryI } from "../../common/interfaces";

type CategoriesCheckboxProps = {
    category: CategoryI[];
    changeHandler: (key: string) => void;
};

export default function CategoriesCheckbox({ category, changeHandler }: CategoriesCheckboxProps) {
    const categoriesCheckbox = category.map((d, index) => {
        return (
            <div className="mx-1.5 inline" key={index}>
                <input
                    type="checkbox"
                    className="mr-1"
                    defaultChecked={d.display}
                    onChange={() => changeHandler(d.key)}
                />
                {d.title}
            </div>
        );
    });

    return <div className="my-2">{categoriesCheckbox}</div>;
}
