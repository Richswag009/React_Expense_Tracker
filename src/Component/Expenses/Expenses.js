import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filterYear}
          onFilterchange={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
