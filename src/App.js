import "./App.css";
import React, { useState } from "react";

//accepta props
//isi schimba starea initiala empty string prin formData
function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  //accepta un eveniment ca parametru
  //distrunturing event
  // ...formData utilizeaza spreand operator pentru a face o copie si a o updata cu target
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // value={formData.goal}  value={formData.by}
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" }); //resetarea inputurilor ca un empty string
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="My goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="by: "
          value={formData.by}
          onChange={changeHandler}
        />
        <button className="buton">Submit goal</button>
      </form>
    </>
  );
}

//prin map se adauga la lista
function ListOfGoal(props) {
  return (
    <ul className="lista">
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

//functia Add goal adauga la lista noile liste
//allGoal este initial un array gol
function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div className="App">
      <div className="background">
        <h1 className="title">My goal app</h1>
        <GoalForm onAdd={addGoal} />
        <ListOfGoal allGoals={allGoals} />
      </div>
    </div>
  );
}

export default App;
