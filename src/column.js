import React from "react";
import styled from "styled-components";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";

// ############# Styled Components ###############
/* Styled Components allows the developer to write
   Their Cascading Style Sheets(CSS) withing their
   JavaScript files.  For React this is extremely 
   useful since everything to create an element is
   all in one file.
*/
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

// ################################################

class Column extends React.Component {
  /* Create the Column JSX element.  This element implements the 
       Droppable functionality from the react-beautiful-dnd library
       This column will be a parent element to the tasks that are
       added to it.  This element has been fully configured and 
       should not need to be touched for this exercise.
    */
  render() {
    console.log(this.props.tasks);
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TaskList
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              {...provided.dropableProps}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

// Make the Column element available to the rest of the code.
export default Column;
