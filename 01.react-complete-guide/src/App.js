import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 12.94, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 2, 28) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;