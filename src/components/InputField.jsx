import { useContext } from "react";
import { InputContext } from "../App";

const InputField = () => {
	const { inputValue, setInputValue } = useContext(InputContext);
	const handelChange = (e) =>
		setInputValue({ ...inputValue, url: e.target.value });

	return (
		<div>
			<label className="font-semibold text-md text-white ">Enter URL</label>
			<div className="mt-1 ">
				<input
					type="url"
					className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="http://example.com"
					value={inputValue.url}
					onChange={handelChange}
				/>
			</div>
		</div>
	);
};

export default InputField;
