const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the trash" },
    "task-2": { id: "task-2", content: "Play Nintendo Switch" },
    "task-3": { id: "task-3", content: "Take a nap" },
    "task-4": { id: "task-4", content: "Wash the dishes" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  },
  columnOrder: ["column-1"]
};

export default initialData;
