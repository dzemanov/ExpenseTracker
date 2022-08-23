import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditingNew, setIsEditingNew] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // not optimal
    };
    props.onAddExpense(expenseData);
    setIsEditingNew(false);
  };

  const cancelEditingHandler = () => {
    setIsEditingNew(false);
  };

  const startEditingHandler = () => {
    setIsEditingNew(true);
  };

  return (
    <div className="new-expense">
      {isEditingNew ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      ) : (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
