import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import './styles.css'

function App() {
  const [state, setState] = useState({
    skills: [{ skill: "JavaScript", level: 4 }], 
    form: {skill: "New dev skill", level: "3"}
  });

  function addSkill(e) {
    e.preventDefault();
    setState((prevState) => ({
      skills: [... prevState.skills, state.form], 
      form: { skill: "New dev skill", level: "3"}
    }));
  }

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState, 
      form: {
        ...prevState.form, 
        [e.target.name]: e.target.value
      }
    }));
  }

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {state.skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={addSkill}>
        <label>
          <span>SKILL</span>
          <input name="skill" value={state.form.skill} onChange={handleChange} />
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={state.form.level} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}

export default App;
