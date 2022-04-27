import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);
	const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
	/* 	const expenses = [
		{ id: 1213, name: "Shopping", cost: 50 },
		{ id: 1213, name: "Holiday", cost: 300 },
		{ id: 1213, name: "Transportation", cost: 70 },
		{ id: 1213, name: "Fuel", cost: 40 },
		{ id: 1213, name: "Child Care", cost: 500 },
	]; */

	useEffect(() => {
		setFilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (e) => {
		const searchResults = expenses.filter((expense) =>
			expense.name.toLowerCase().includes(e.target.value)
		);
		setFilteredExpenses(searchResults);
	};

	return (
		<div className="list-group">
			<input
				type="text"
				className="form-control"
				placeholder="Item to search..."
				onChange={handleChange}
			/>
			<ul className="list-group mt-3">
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</div>
	);
};

export default ExpenseList;
