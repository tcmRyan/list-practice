import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

// ############# Styled Components ###############
/* Styled Components allows the developer to write
   Their Cascading Style Sheets(CSS) withing their
   JavaScript files.  For React this is extremely 
   useful since everything to create an element is
   all in one file.
*/
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

// ###############################################

class Task extends React.Component {
  /* Create the Task JSX element.  This element implements the 
       Draggable functionality from the react-beautiful-dnd library
       This task will be a child element to a column that it is added
       to.  This element has been fully configured and 
       should not need to be touched for this exercise.
    */
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
