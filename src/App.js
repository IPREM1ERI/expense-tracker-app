import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 12.23,
      date: new Date(2021, 0, 1)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 242.23,
      date: new Date(2021, 0, 2)
    },
    {
      id: 'e3',
      title: 'Keyboard',
      amount: 442.23,
      date: new Date(2021, 0, 3)
    },
    {
      id: 'e4',
      title: 'Video Game',
      amount: 42.23,
      date: new Date(2021, 0, 4)
    }
  ]

  return (
    <div>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
