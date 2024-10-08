import { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { InputContext } from "../App";

const InputColour = () => {
	const [color, setColor] = useState("#000");
	const [dispalyColourPicker, setDispalyColourPicker] = useState(false);
	const { inputValue, setInputValue } = useContext(InputContext);
	useEffect(() => {
		setInputValue({ ...inputValue, color: color });
	}, [color]);

	const handelChange = (color) => setColor(color.hex);

	return (
		<div>
			<label className="font-semibold text-md text-white ">Color</label>
			<div className="flex items-center gap-2 mt-1">
				<div
					onClick={() => setDispalyColourPicker(!dispalyColourPicker)}
					style={{ background: color }}
					className="w-10 h-8 cursor-pointer border-4 "
				></div>
				<span className="text-white">{color}</span>
			</div>

			{dispalyColourPicker && (
				<div className="absolute mt-2 z-10">
					<ChromePicker color={color} onChange={handelChange} />
				</div>
			)}
		</div>
	);
};

export default InputColour;
