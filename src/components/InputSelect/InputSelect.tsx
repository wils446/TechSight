type InputSelectProps = {
    techList: string[];
    changeHandler: (str: string) => void;
};

export default function InputSelect({ techList, changeHandler }: InputSelectProps) {
    const OptionsJSX = techList.map((str) => {
        return <option className="py-2">{str}</option>;
    });

    return (
        <select
            onChange={(e) => changeHandler(e.target.value)}
            className="w-full border bg-white rounded px-3 py-2 outline-none"
        >
            {OptionsJSX}
        </select>
    );
}
