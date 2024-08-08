import { createContext, useState } from "react";
import { InputForm } from "./components";

import "./App.css";

export const InputContext = createContext();

const App = () => {
	const [inputValue, setInputValue] = useState({
		url: "",
		color: "",
	});

	const value = {
		inputValue,
		setInputValue,
	};

	return (
		<div className="body h-screen pt-20 md:pt-36 px-2">
			<div className="container mx-auto max-w-4xl rounded-md shadow card">
				<div className="">
					<InputContext.Provider value={value}>
						<InputForm />
					</InputContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default App;
