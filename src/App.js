import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

function App() {
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">My Bugget Planner</h1>
				<div className="row mt-3">
					<div className="col-sm">
						<Budget />
					</div>
					<div className="col-sm">
						<Remaining />
					</div>
					<div className="col-sm">
						<ExpensesTotal />
					</div>
				</div>
				<h3 className="mt-3">Expenses</h3>
				<div className="row mt-3">
					<div className="col-sm">
						<ExpenseList />
					</div>
				</div>
				<h3 className="mt-3">Add Expense</h3>
				<div className="mt-3">
					<div className="col-sm">
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
