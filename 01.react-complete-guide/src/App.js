import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 12.94, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 2, 28) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is alsse le</p>
      { expenses.map(expenses => <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
    </div>
  )
}

export default App;