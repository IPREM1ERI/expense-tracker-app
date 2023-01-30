import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  const expenseDate = new Date(2021, 0, 1);
  const expenseTitle = 'Car Insurance!';
  const expenseAmount = 243.12;

  const month = expenseDate.toLocaleString('en-US', {month: 'long'})
  const year = expenseDate.getFullYear()
  const day = expenseDate.toLocaleString('en-US', {day: '2-digit'})

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description"> 
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;