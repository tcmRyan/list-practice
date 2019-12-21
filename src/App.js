import React from "react";
import initalData from "./initial-data";
import Column from "./column";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  // The state holds all the data that reflects the current state of the application.
  // State is a property that all React Components use.
  state = initalData;

  onDragEnd = result => {
    // TODO:  We will implement this method in a future lesson
  };

  createColumns() {
    // Takes no inputs and reutrns a list on Column JSX elements based on the data
    // that is in the state. the Column element has been created for you.  You will need
    // to pass it a key, column and tasks
    const columns = [];
    for (let i = 0; i < this.state.columnOrder.length; i++) {
      const column = this.state.columns[this.state.columnOrder[i]];
      const tasks = this.getColumnTasks(column);
      columns.push(<Column key={column.id} column={column} tasks={tasks} />);
    }

    return columns;
  }

  getColumnTasks(column) {
    /* Takes a column and returns a list of task objects.  It finds the task objects
       based on the taskIds that are in the column
    */
    const columnTasks = [];
    for (let i = 0; i < column.taskIds.length; i++) {
      const task = column.taskIds[i];
      columnTasks.push(this.state.tasks[task]);
    }
    return columnTasks;
  }

  render() {
    /* render is a special function implemented by React.  This is the function that
       will tell the web page what it needs to look like for each component
    */
    const columns = this.createColumns();
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>{columns}</DragDropContext>
    );
  }
}

export default App;
