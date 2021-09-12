import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors  Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: 'true',
    },
  ])

  // DELETE TASK

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks To Show')}

    </div>
  );
}


export default App;
