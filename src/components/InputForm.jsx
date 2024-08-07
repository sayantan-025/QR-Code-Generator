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
		<div className="grid md:grid-cols-3 gap-8 p-4">
			<div className="md:col-span-2 p-4 grid gap-4 ">
				<InputField />
				<InputColour />
				<button
					onClick={handelClick}
					className="bg-emerald-600 mx-w-xs ml-auto px-4 py-2 text-white mt-4 rounded-sm hover:bg-emerald-700 disabled:bg-gray-300"
				>
					Generate QrCode
				</button>
			</div>
			<div className="md:col-span-1 grid mx-auto">
				<DataContext.Provider value={value}>
					<QrCode />
				</DataContext.Provider>
			</div>
		</div>
	);
};

export default InputForm;
