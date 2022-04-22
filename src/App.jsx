import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [job, setJob] = useState('');
	const [jobs, setJobs] = useState(() => {
		const storageJobs = JSON.parse(localStorage.getItem('jobs'));
		return storageJobs ?? [];
	});

	const handleSubmit = () => {
		setJobs((prev) => {
			const newJobs = [...prev, job];

			const jsonJobs = JSON.stringify(newJobs);
			localStorage.setItem('jobs', jsonJobs);

			return newJobs;
		});
		setJob('');
	};

	console.log(job);
	return (
		<div style={{ padding: 32 }}>
			<input value={job} onChange={(e) => setJob(e.target.value)} />
			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, index) => {
					return <li key={index}>{job}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
