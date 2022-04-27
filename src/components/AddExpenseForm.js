import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
//npm i react-uuid
import uuid from "react-uuid";
const id = uuid();

const AddExpenseForm = () => {
	const [name, setName] = useState("");
	const [cost, setCost] = useState("");
	const { dispatch } = useContext(AppContext);

	const onSubmit = (e) => {
		e.preventDefault();
		const expense = {
			id: id,
			name: name,
			cost: parseInt(cost),
		};

		//useReducer
		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});

		setName("");
		setCost("");
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="row">
				<div className="col-sm col-lg-4">
					<label for="name">Name</label>
					<input
						type="text"
						required="required"
						className="form-control"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="col-sm col-lg-4">
					<label for="cost">Cost</label>
					<input
						type="text"
						required="required"
						className="form-control"
						id="cost"
						value={cost}
						onChange={(e) => setCost(e.target.value)}
					/>
				</div>
				<div className="row mt-3">
					<div className="col-sm">
						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
