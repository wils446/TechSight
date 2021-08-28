type InputSelectProps = {
    techList: string[];
    changeHandler: (str: string) => void;
};

export default function InputSelect({ techList, changeHandler }: InputSelectProps) {
    const OptionsJSX = techList.map((str, index) => {
        return (
            <option key={index} className="py-2">
                {str}
            </option>
        );
    });

    return (
        <select
            onChange={(e) => changeHandler(e.target.value)}
            className="w-full border bg-white rounded px-3 py-2 outline-none"
        >
            <option className="py-2 italic" disabled selected>
                -- select technology --
            </option>
            {OptionsJSX}
        </select>
    );
}
