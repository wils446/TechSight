import { Category } from "../../common/interface/DataTyping";

type CategoryButtonProps = {
    categoryLabel: Category;
    categoryOnChangeHandler: (category: Category) => void;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ categoryLabel, categoryOnChangeHandler }) => {
    const labels = ["popularityAll", "popularityProfessional", "loved", "wanted", "income"];
    console.log(categoryLabel);

    return (
        <div className="category-button">
            {labels.map((label, index) => {
                return (
                    <button
                        key={index}
                        id={label}
                        onClick={(e) => categoryOnChangeHandler(e.currentTarget.id as Category)}
                        className={categoryLabel === label ? "active" : ""}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryButton;
