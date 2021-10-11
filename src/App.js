import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
	const [ showAddTask, setShowAddTask ] = useState(false)
	const [ tasks, setTasks ] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Today at 5:00pm',
			reminder: true
		},
		{
			id: 2,
			text: 'School Meeting',
			day: 'Tomorrow at 6:00am',
			reminder: true
		},
		{
			id: 3,
			text: 'Food Shoping',
			day: 'Tomorrow at 9:00pm',
			reminder: false
		}
	])

	//Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = { id, ...task }
		setTasks([ ...tasks, newTask ])
	}

	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//Reminder toggle
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
	}

	return (
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No Tasks To Display'
			)}
		</div>
	)
}

export default App
