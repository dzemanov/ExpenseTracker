import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [visible, setVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // not optimal
    };
    props.onAddExpense(expenseData);
    setVisible(false);
  };

  const cancelFormHandler = () => setVisible(false);
  const openFormHandler = () => setVisible(true);

  return (
    <div className="new-expense">
      {visible ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormHandler}
        />
      ) : (
        <button type="button" onClick={openFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
