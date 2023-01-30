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
      <ExpenseItem expenses={expenses}/>
    </div>
  );
}

export default App;
