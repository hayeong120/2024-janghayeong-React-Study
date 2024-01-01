import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const name = props.name;
  const taskList = props.tasks.map((task) => ( <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} /> ));
  const btnnameList = props.btnName.map((Button) => <FilterButton name={Button.name} />)
  return (
    <div className="todoapp stack-large">
      <h1>{name} 컴포넌트화 완성</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        {btnnameList}
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
