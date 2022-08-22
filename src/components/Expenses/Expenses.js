import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectFilter={filterHandler} />
      {filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
