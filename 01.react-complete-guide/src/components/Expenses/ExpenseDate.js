import "./ExpenseDate.css"



const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="calender">
      <div className="calender__month">
        <p >{month}</p>
      </div>
      <div className="calender__year">
        <p >{year}</p>
      </div>
      <div className="calender__day">
        <p >{day}</p>
      </div>
    </div>
  );
}

export default ExpenseDate;