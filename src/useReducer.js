import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		case "newUserInput":
			return { ...state, userIput: action.payload };
		case "tgColor":
			return { ...state, color: !state.color };
		default:
			throw new Error();
	}
};

function App() {
	const [state, distpatch] = useReducer(reducer, {
		count: 0,
		userIput: "",
		color: false,
	});

	return (
		<main className="App" style={{ color: state.color ? "#FFF" : "#FFF952" }}>
			<input
				type="text"
				value={state.userIput}
				onChange={(e) =>
					distpatch({ type: "newUserInput", payload: e.target.value })
				}
			/>
			<br />
			<br />
			<p>{state.count}</p>
			<section>
				<button onClick={() => distpatch({ type: "decrement" })}>-</button>
				<button onClick={() => distpatch({ type: "increment" })}>+</button>
				<button onClick={() => distpatch({ type: "tgColor" })}>Color</button>
			</section>
			<br />
			<br />
			<p>{state.userIput}</p>
		</main>
	);
}

export default App;
