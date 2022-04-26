import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ id, name, cost }) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		//useReducer
		dispatch({
			type: "DELETE_EXPENSE",
			payload: id,
		});
	};

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{name}
			<div>
				<span className="badge bg-primary rounded-pill mr-3">${cost}</span>
				<TiDelete size="1.5em" onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;
