import { createContext, useState } from "react";
import { InputForm } from "./components";

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
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-36 px-2">
			<div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
				<div className="md:grid md:grid-cols-3">
					<InputContext.Provider value={value}>
						<InputForm />
					</InputContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default App;
