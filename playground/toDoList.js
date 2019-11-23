//exercise

const tasks = {
  tasks: [
    {
      text: "grocery shopping",
      completed: true
    },
    {
      text: "clean yard",
      completed: false
    },
    {
      text: "film course",
      completed: false
    }
  ],
  getTasksToDo() {
    const tasksToDo = this.tasks.filter(task => {
      return task.completed == false;
    });
    return tasksToDo;
  }
};

console.log(tasks.getTasksToDo());
