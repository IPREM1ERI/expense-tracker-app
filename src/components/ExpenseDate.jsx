
const ExpenseDate = (props) => {
  const month = expenseDate.toLocaleString('en-US', {month: 'long'})
  const year = expenseDate.getFullYear()
  const day = expenseDate.toLocaleString('en-US', {day: '2-digit'})
}

export default ExpenseDate
