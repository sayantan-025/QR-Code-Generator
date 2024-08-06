import { useContext } from "react";
import { InputContext } from "../App";

const InputField = () => {
	const { inputValue, setInputValue } = useContext(InputContext);
	const handelChange = (e) =>
		setInputValue({ ...inputValue, url: e.target.value });

	return (
		<div>
			<label className="font-semibold text-md">Enter URL</label>
			<input
				type="url"
				className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
				placeholder="http://example.com"
				value={inputValue.url}
				onChange={handelChange}
			/>
		</div>
	);
};

export default InputField;
