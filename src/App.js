import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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
			text: 'Food Shooping',
			day: 'Tomorrow at 9:00pm',
			reminder: false
		}
	]);

	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Reminder toggle
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No Tasks To Display'
			)}
		</div>
	);
};

export default App;
