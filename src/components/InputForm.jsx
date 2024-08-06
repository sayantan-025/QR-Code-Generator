import { createContext, useContext, useState } from "react";
import { InputField } from "./index";
import { InputColour } from "./index";
import { InputContext } from "../App";
import QrCode from "./QrCode";

export const DataContext = createContext();

const InputForm = () => {
	const { inputValue, setInputValue } = useContext(InputContext);

	const [data, setData] = useState({
		url: "",
		color: "",
	});
	const handelClick = () => {
		setInputValue({ ...inputValue, url: "", color: "" });
		setData({ ...data, url: inputValue.url, color: inputValue.color });
	};

	const value = {
		data,
		setData,
	};
	console.log(data);

	return (
		<div className="col-span-2 p-6 grid gap-4">
			<InputField />
			<InputColour />
			<button
				onClick={handelClick}
				className="bg-indigo-600 mx-w-xs ml-auto px-4 py-2 text-white mt-4 rounded-sm hover:bg-indigo-700 disabled:bg-gray-300"
			>
				Generate QrCode
			</button>
			<DataContext.Provider value={value}>
				<QrCode />
			</DataContext.Provider>
		</div>
	);
};

export default InputForm;
